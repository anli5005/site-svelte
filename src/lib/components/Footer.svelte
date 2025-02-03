<script lang="ts">
	interface Props {
		becomesTransparent?: boolean;
	}

	const { becomesTransparent = true }: Props = $props();

	const transparentizer = $derived(
		becomesTransparent
			? 'sm:dark:bg-transparent sm:dark:contrast-more:bg-transparent sm:text-white'
			: ''
	);
</script>

<div class="dark:bg-ocean-950 dark:contrast-more:bg-black {transparentizer}">
	<footer
		class="rounded-t-2xl px-4 py-12 text-center text-ocean-950/60 dark:text-white w-full dark:bg-ocean-1000 dark:contrast-more:bg-black {transparentizer}"
	>
		<p class="mb-2">&copy; 2025 Anthony Li • <a class="opacity-70 hover:opacity-60" href="https://github.com/anli5005/site-svelte"><span class="underline">Made with</span> ❤️</p>
        <p><a class="underline opacity-70 hover:opacity-60" href="https://github.com/anli5005/site-svelte/blob/main/package.json">Powered by SvelteKit and many other open-source projects</a></p>
	</footer>
</div>
