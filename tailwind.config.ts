import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { portfolio } from './src/portfolio';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			typography: (theme) => ({
				'3xl': {
					css: {
						fontSize: '1.875rem',
						lineHeight: '1.875rem'
					}
				},
				'4xl': {
					css: {
						fontSize: '2.25rem',
						lineHeight: '2.25rem'
					}
				},
				'5xl': {
					css: {
						fontSize: '3.052rem',
						lineHeight: '3.052rem'
					}
				},
				'6xl': {
					css: {
						fontSize: '3.815rem',
						lineHeight: '3.815rem'
					}
				}
			})
		},
		fontFamily: {
			brandon: [
				'Brandon',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				"'Segoe UI'",
				'Roboto',
				"'Helvetica Foliole'",
				'Arial',
				"'Noto Sans'",
				'sans-serif',
				"'Apple Color Emoji'",
				"'Segoe UI Emoji'",
				"'Segoe UI Symbol'",
				"'Noto Color Emoji'"
			]
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'6xl': '3.815rem',
			'7xl': '4.768rem',
			'8xl': '5.96rem',
			'9xl': '7.451rem',
			'10xl': '9.313rem'
		},
		lineHeight: {
			sm: '1rem',
			base: '1.25rem',
			xl: '1.563rem',
			'2xl': '1.953rem',
			'3xl': '2.441rem',
			'4xl': '3.052rem',
			'5xl': '3.815rem',
			'6xl': '4.768rem',
			'7xl': '5.96rem',
			'8xl': '7.451rem',
			'9xl': '9.313rem',
			'10xl': '14.551rem'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		forms,
		skeleton({
			themes: {
				custom: [portfolio]
			}
		})
	]
} satisfies Config;
