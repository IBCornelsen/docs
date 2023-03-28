<p align="center">
<img src="public/icon.svg" alt="PolyDocs Logo" width="300" />
</p>

Hello, fellow polyglots! Are you tired of building documentation sites that only
cater to one language? Do you want to create a website that can speak multiple
tongues and impress your friends? Well, you've come to the right place!

Introducing the Multilingual Documentation Template with Astro - the ultimate
solution for all your language-related woes! With this template, you can now
create documentation in not one, not two, but multiple languages! That's right,
folks - you can now make your website speak in French, Spanish, Mandarin, and
even Elvish.

But wait, there's more! This template is built using Astro, a static site
builder that allows you to create blazing-fast websites that will leave your
competitors in the dust. Plus, it comes pre-configured with support for multiple
languages, so you don't have to waste time fiddling around with complicated
configurations.

So what are you waiting for? Start building your multilingual documentation
website today and show the world that one language is just not enough!

## Installation

To get started with PolyDocs, follow these simple steps:

1. Clone the repository: `git clone https://github.com/letsmoe/polydocs.git`
2. Navigate to the project directory: cd your-repo
3. Install dependencies: `pnpm install`

That's it! You're now ready to start building your docs.

### Running the Development Server

To run the development server and see your changes in real-time, use the following command:

```bash
pnpm run dev
```

This will start the development server and open the site in your default browser. You can now make changes to your site and see them update in real-time.

## Configuration

To get started with this template, you'll need to set a few configuration
options in the `astro.i18n.config.ts` file. In this file, you can specify the
languages you want to support, along with any other settings you want to
customize.

For example, to add support for French and Spanish, you can add the following
lines to the `astro.i18n.config.ts` file:

```js
export default {
	defaultLangCode: "en",
	supportedLangCodes: ["fr", "es"],
	translations: {
		en: (await import("./i18n/en/config.json")).default,
		fr: (await import("./i18n/fr/config.json")).default,
		es: (await import("./i18n/es/config.json")).default
	}
}
```

In addition to configuring languages, you can also customize settings such as
the site title, navigation, and styles. For more information on available
configuration options, clone the repo and view the full documentation right from there 😉.

## Launching your Site

Once you've configured your site, you can launch it using `pnpm run build` or
`npm run build` or `yarn build`. This command will build your site and output
the files to the `dist` directory. You can then deploy these files to your
hosting provider of choice.

```bash
pnpm run build
npm run build
yarn build
```

That's it! Your multilingual documentation is now ready to go. Users can
easily switch between languages using the language switcher in the navigation,
providing a seamless experience for users around the world.
