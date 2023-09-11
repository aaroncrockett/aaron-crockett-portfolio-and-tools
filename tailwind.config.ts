import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { portfolio } from './src/portfolio'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
    fontFamily: {
      brandon: [
        'Brandon',
        'sans-serif',
      ],
    },
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [
					portfolio,
				],
			},
		}),
	],
} satisfies Config;
