import type { AstroGlobal } from "astro";
import { config } from "./shared";
import i18nConfig from "../../../astro.i18n.config";
import { getLanguageFromURL } from "./getLanguage";

type NestedKeyOf<T> = T extends object ? (
	{ [K in keyof T & string]: 
			T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K 
	}[keyof T & string]
) : '';

export function t<T = (typeof i18nConfig["translations"]), L = keyof (typeof i18nConfig["translations"])>(
	key: NestedKeyOf<T[L]>
): string {
	const { supportedLangCodes, defaultLangCode, translations } = i18nConfig;

	// Check if the default language code exists in our list of translations.
	if (!(defaultLangCode in translations)) {
		throw new Error(
			`Missing language code '${defaultLangCode}' in translations property. The default language code must be defined!`
		);
	}

	const { astro } = config;

	// Get the current language.
	if (!astro) {
		throw new Error(
			"You must first call 'i18nInit' with AstroGlobal as a parameter."
		);
	}
	let language = getLanguageFromURL(astro?.request.url) || defaultLangCode;
	if (supportedLangCodes.indexOf(language) == -1) {
		console.warn(
			"Language not supported, reverting back to " + defaultLangCode
		);
		language = defaultLangCode;
	}

	if (!(language in translations)) {
		throw new Error(
			`Language '${language}' not found in list of translations.`
		);
	}

	// Match the route recursively by splitting at each dot.
	const parts = key.split(".");
	const matchAllParts = (
		parts: string[],
		object: Record<string, any> = translations,
		lang = language
	) => {
		let translationObject = object[lang];
		for (const part of parts) {
			if (!(part in translationObject)) {
				if (lang == defaultLangCode) {
					throw new Error(`Missing translation for ${part}`);
				}

				console.warn(
					`Missing translation for '${part}' with language '${lang}', reverting back to '${defaultLangCode}'.`
				);
				return matchAllParts(parts, translations, defaultLangCode);
			}

			translationObject = translationObject[part];
		}
		return translationObject;
	};

	const translation = matchAllParts(parts);

	return translation;
}

export function i18nInit(astro: AstroGlobal): void {
	config.astro = astro;
}

