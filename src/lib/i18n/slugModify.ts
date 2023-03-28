export const normalizeSlug = (slug: string): string =>
	slug.replace(/(?:[0-9]+-)+/g, "");


export function removeLangFromSlug(slug:string): string {
	const [lang, ...rest] = slug.split("/");

	return rest.join("/");
}