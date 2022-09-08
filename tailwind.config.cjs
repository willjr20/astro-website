/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {screens: {sm: '480', md: '768', lg: '976', xl: '1440'},
		extend: {
			colors: {
			 // This color defined an example of a custom color
			 // brightRed: 'hsl(12, 88%, 59%)',
			}
		},
	},
	plugins: [],
}
