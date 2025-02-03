<script lang="ts">
	import { SplitLayout, SplitLayoutHeader, SplitLayoutContent, type ProjectColor } from '$lib';
	
	// @ts-ignore
	import IconArrowRight from '~icons/majesticons/arrow-right-line';

	function cssVariable(color: ProjectColor) {
		if (typeof color === "string") {
			return `--link-color-light: ${color}; --link-color-dark: ${color};`;
		} else {
			return `--link-color-light: ${color.light}; --link-color-dark: ${color.dark};`;
		}
	}
</script>

{#snippet miscLink(title: string, subtitle: string, href: string, color: ProjectColor)}
<a class="block rounded-xl mb-4 last:mb-0 px-6 py-4 misc-link transition-colors" href={href} style={cssVariable(color)}>
	<h2 class="font-sans text-2xl font-bold">{title} <IconArrowRight class="inline -mt-1" /></h2>
	<p>{subtitle}</p>
</a>
{/snippet}

<SplitLayout>
	<SplitLayoutHeader>
		<h1 class="font-sans text-6xl font-bold text-white text-center">Misc</h1>
	</SplitLayoutHeader>
	<SplitLayoutContent>
		{@render miscLink('UNIX Timestamper', 'Convert dates to UNIX timestamps in the browser', '/timestamper', {
			light: 'var(--color-amber-600)',
			dark: 'var(--color-amber-400)',
		})}

		<h2 class="font-sans mt-8 text-3xl font-bold">Tools for BCA Students</h2>
		<p class="mb-4">An assortment of tools that I maintained during my time at the <a class="link" target="_blank" href="https://en.wikipedia.org/wiki/Bergen_County_Academies">Bergen County Academies.</a></p>
		{@render miscLink('Notes for BCA Students', 'A collection of class notes I took while there', 'https://bcanotes.anli.dev', {
			light: 'var(--color-blue-600)',
			dark: 'var(--color-blue-400)',
		})}
		{@render miscLink('BetterSchoology', 'A native macOS client for BCA\'s Schoology instance (no longer maintained)', 'https://github.com/anli5005/BetterSchoology', {
			light: 'var(--color-cyan-600)',
			dark: 'var(--color-cyan-400)',
		})}
		{@render miscLink('YourBCABus', 'The BCA bus tracking app', 'https://yourbcabus.com', {
			light: 'var(--color-teal-600)',
			dark: 'var(--color-teal-400)',
		})}
	</SplitLayoutContent>
</SplitLayout>

<div class="bg-grape-600 fixed inset-0 -z-10"></div>

<style>
	.misc-link {
		--link-color: var(--link-color-light);

		background-color: color-mix(in oklab, var(--link-color) 10%, transparent);
		color: var(--link-color);
	}

	.misc-link:hover {
		background-color: color-mix(in oklab, var(--link-color) 20%, transparent);
	}

	.misc-link:active {
		background-color: color-mix(in oklab, var(--link-color) 30%, transparent);
	}

	@media (prefers-color-scheme: dark) {
		.misc-link {
			--link-color: var(--link-color-dark);
		}
	}
</style>