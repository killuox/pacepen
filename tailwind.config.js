/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			fontFamily: {
				sans: ['Patrick Hand', defaultTheme.fontFamily.sans]
			},
			colors: {
				pen: {
					50: '#f7f7f7',
					100: '#efefef',
					200: '#d7d7d7',
					300: '#bfbfbf',
					400: '#8f8f8f',
					500: '#5f5f5f',
					600: '#565656',
					700: '#474747',
					800: '#373737',
					900: '#1b1b1b'
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
