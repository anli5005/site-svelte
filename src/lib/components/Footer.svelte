<script lang="ts">
	interface Props {
		becomesTransparent?: boolean;
	}

	const { becomesTransparent = true }: Props = $props();

	const transparentizer = $derived(
		becomesTransparent
			? 'sm:dark:bg-transparent sm:dark:contrast-more:bg-transparent sm:text-white/70'
			: ''
	);
</script>

<div class="dark:bg-ocean-950 dark:contrast-more:bg-black {transparentizer}">
	<footer
		class="rounded-t-2xl py-12 text-center text-ocean-950/60 dark:text-white/70 w-full dark:bg-ocean-1000 dark:contrast-more:bg-black {transparentizer}"
	>
		&copy; 2025 Anthony Li
	</footer>
</div>
