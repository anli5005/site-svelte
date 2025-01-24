<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import NavbarBackground from '$lib/NavbarBackground.svelte';
</script>

<div class="h-20 md:h-24">
	<NavbarBackground tabs={4} currentTab={0} />
</div>
{@render children()}
