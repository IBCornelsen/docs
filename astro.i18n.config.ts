export default {
	defaultLangCode: "en",
	supportedLangCodes: ["de"],
	translations: {
		en: (await import("./i18n/en/config.json")).default,
		de: (await import("./i18n/de/config.json")).default
	}
}