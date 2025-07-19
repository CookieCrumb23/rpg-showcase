import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: ['*']
			/*handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (status === 404) return; // suppress 404s
				throw new Error(`${status} ${path}`);
			} */
		}
	}
};

export default config;
