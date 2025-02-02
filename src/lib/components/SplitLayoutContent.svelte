<script lang="ts">
	import { type Snippet } from 'svelte';

	const {
		children,
		spacingClasses = 'p-8 md:p-12'
	}: { children: Snippet; spacingClasses?: string } = $props();
</script>

<div
	class="relative rounded-t-2xl min-w-0 w-full flex-grow sm:rounded-3xl bg-white dark:bg-ocean-950 {spacingClasses} dark:contrast-more:bg-black"
>
	{@render children()}
</div>
