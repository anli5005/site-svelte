import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		extend: {
			colors: {
				sage: {
					'400': '#21d988',
					'500': '#1db673',
					'600': '#11ad69'
				},
				ocean: {
					'50': '#edf4ff',
					'100': '#d0e1ff',
					'200': '#b0d5ff',
					'300': '#94c6ff',
					'400': '#0f7dff',
					'500': '#096de3',
					'700': '#065fc9',
					'900': '#0a3463',
					'950': '#111c35',
					'1000': '#0a1224'
				},
				grape: {
					'300': '#b06bff',
					'400': '#9c45ff',
					'600': '#8b24ff',
					'800': '#7b10f3'
				}
			}
		},
		fontFamily: {
			sans: [
				"'Hanken Grotesk'",
				'ui-sans-serif',
				'"Helvetica Neue"',
				'Helvetica',
				'arial',
				'sans-serif'
			],
			serif: ['Charter', 'ui-serif', '"Roboto Slab"', 'Georgia', 'serif'],
			mono: [
				'"Fira Code"',
				'"Fira Mono"',
				'ui-monospace',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace'
			]
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
