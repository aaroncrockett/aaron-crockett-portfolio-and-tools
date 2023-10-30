import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
/** @type {import('mdsvex').MdsvexOptions} */

const mdsvexOptions = {
	extensions: ['.md']
};
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({ runtime: 'edge' }),

		inlineStyleThreshold: 5000
	}
};
export default config;
