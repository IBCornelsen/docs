import i18nConfig from "../../../astro.i18n.config";
import { normalizeSlug } from "./slugModify";

/** Get a page’s slug, without the language prefix (e.g. `'en/migrate'` => `'migrate'`). */
export const stripLangFromSlug = (slug: string) =>
	slug.split("/").slice(1).join("/");

/** Get a page’s lang tag from its slug (e.g. `'en/migrate'` => `'en'`). */
export const getLangFromSlug = (slug: string) => slug.split("/")[0];

export function getLanguageFromURL(pathname: string) {
	const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
	return langCodeMatch ? langCodeMatch[1] : "en";
}

export function getLanguageFromFilename(filename: string) {
	const langCodeMatch = filename.match(/([a-z]{2}-?[a-z]{0,2})\//);
	return langCodeMatch ? langCodeMatch[1] : i18nConfig.defaultLangCode || "en";
}

export function getSlugFromFilename(filename: string) {
	let slug = normalizeSlug(filename.replace(/([a-z]{2}-?[a-z]{0,2})\//, ""));
	return slug.split('.').slice(0, -1).join('.');
}

export const DEFAULT_LOCALE = i18nConfig.defaultLangCode || "en";
export const KNOWN_LANGUAGE_CODES = i18nConfig.supportedLangCodes || [];