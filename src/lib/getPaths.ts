import { CollectionEntry } from 'astro:content';
import {
  getLanguageFromFilename,
  getSlugFromFilename
} from './i18n/getLanguage';

export function getPaths(allData: CollectionEntry<"docs">[]) {
	return allData.map((page) => {
	// This is the two-character code ('en' or 'de'), from the file path
	const locale = getLanguageFromFilename(page.id);
	
	// This is the English version of the slug
	const canonicalSlug = getSlugFromFilename(page.id);

	return {
		params: {
			locale: locale,
			// This is the translated version of the slug
			slug: page.slug,
		},

		props: {
			page: {
				...page,
				// This is provided to the language picker as a `slug` prop,
				// so that it can redirect as we described above
				canonicalSlug,
				locale
			},
		},
	};
});
}