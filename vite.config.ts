import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		Icons({ compiler: 'svelte' }),
		AutoImport.vite({
			include: [/.md$/],
			imports: [
				{
					'$lib/components/CustomBlockquote.svelte': [
						['default', 'CustomBlockquote'],
					],
				},
			],
		}),
	]
});
