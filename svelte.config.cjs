const sveltePreprocess = require("svelte-preprocess");
const adapter = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				external: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
