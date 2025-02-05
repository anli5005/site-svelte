import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { visit } from 'unist-util-visit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
				() => tree => {
					visit(tree, 'blockquote', node => {
						if (!node.children || node.children.length === 0) return;
						
						const paragraph = node.children[0];
						if (paragraph.type !== 'paragraph') return;
						if (!paragraph.children || paragraph.children.length === 0) return;

						const firstChild = paragraph.children[0];
						if (firstChild.type !== 'linkReference' || !firstChild.label) return;
						if (!firstChild.label.startsWith("!")) return;

						paragraph.children.shift();
						if (paragraph.children.length === 0) {
							node.children.shift();
						}

						node.type = 'parent';
						node.children = [
							{
								type: 'html',
								value: `<CustomBlockquote specifier="${firstChild.label.slice(1)}">`
							},
							...node.children,
							{
								type: 'html',
								value: `</CustomBlockquote>`
							}
						];
					});
				}
			]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
