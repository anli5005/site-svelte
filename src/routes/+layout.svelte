<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { Navbar } from '$lib';
</script>

<svelte:head>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff">
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a1224">
	<meta name="theme-color" media="(prefers-color-scheme: dark) and (prefers-contrast: more)" content="#000000">
	<meta name="theme-color" content="#096de3">
</svelte:head>

<Navbar />
{@render children()}
