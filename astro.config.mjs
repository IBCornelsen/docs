import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
export const locales = {
  root: {
    label: "Deutsch",
    lang: "de"
  },
  de: {
    label: "English",
    lang: "en"
  }
};
const site = "https://docs.ibcornelsen.de";


// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [starlight({
    title: "IBCornelsen",
    favicon: "/favicon.jpg",
    logo: {
      light: "/public/logo-big.png",
      dark: "/public/logo-big.png",
      replacesTitle: true
    },
    editLink: {
      baseUrl: "https://github.com/IBCornelsen/docs/edit/main/content/docs"
    },
    social: {
      github: "https://github.com/IBCornelsen/docs"
    },
    head: [{
      tag: "script",
      attrs: {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "EZBHTSIG",
        defer: true
      }
    }, {
      tag: "meta",
      attrs: {
        property: "og:image",
        content: site + "og.jpg?v=1"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: site + "og.jpg?v=1"
      }
    }],
    customCss: ["./src/assets/landing.css"],
    locales,
    defaultLocale: "de",
    sidebar: [{
      label: "Beginne hier",
      translations: {
        en: "Start here"
      },
      items: [{
        label: "Erste Schritte",
        link: "getting-started",
        translations: {
          en: "Getting Started"
        }
      }, {
        label: "Manuelle Einrichtung",
        link: "manual-setup",
        translations: {
          en: "Manual Setup"
        }
      }, {
        label: "Umweltbelastung",
        link: "environmental-impact",
        translations: {
          en: "Environmental Impact"
        }
      }, {
        label: "Schaufenster",
        link: "showcase",
        translations: {
          en: "Showcase"
        }
      }]
    }, {
      label: "Anleitungen",
      translations: {
        en: "Guides"
      },
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Referenz",
      translations: {
        en: "Reference"
      },
      autogenerate: {
        directory: "reference"
      }
    }],
    plugins: [starlightLinksValidator({
      errorOnFallbackPages: false,
      errorOnInconsistentLocale: true
    })]
  }), svelte(), tailwind()]
});