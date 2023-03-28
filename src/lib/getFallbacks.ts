import { DEFAULT_LOCALE, getLanguageFromFilename, getSlugFromFilename, KNOWN_LANGUAGE_CODES } from "./i18n/getLanguage";
import { CollectionEntry } from 'astro:content';

/**
 * Create any missing files for a locale, using to the default locale's content
 */
export function getFallbacks(data: CollectionEntry<"docs">[]) {
	return data
		// Loop over the English (default) locale files
		.filter(p => getLanguageFromFilename(p.id) === DEFAULT_LOCALE)
		.map((page) => {
			const canonicalSlug = getSlugFromFilename(page.id);

			// Create any missing fallbacks
			return KNOWN_LANGUAGE_CODES
				.filter(
					// limit to non-default locales...
					locale => locale !== DEFAULT_LOCALE
					// ...which do not already have a file for this slug in this locale
					&& !data.find(d =>
						getLanguageFromFilename(d.id) === locale
						&& d.id.endsWith(`${canonicalSlug}.mdx`)
					)
				)
				.map(locale => ({
					params: {
						locale, // non-default locale, like `es`
						slug: page.slug, // default slug, like `introduction`
					},
					props: {
						locale,
						page: {
							...page,
							canonicalSlug,
							locale
						},
						fallback: true
					}
				}))
		})
		// Flatten array of arrays into a single array
		.flat();
}