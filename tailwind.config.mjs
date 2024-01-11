/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}","./node_modules/@ibcornelsen/ui/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(255, 125, 38)",
				secondary: "rgb(68, 79, 148)",
				"gray-primary": "rgb(146, 151, 153)",
				bg: "white",
				"status-error": "red",
				"status-success": "green",
				"pdf-yellow-bright": "#f3cb00",
				"pdf-yellow-light": "#fff6ca"
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
