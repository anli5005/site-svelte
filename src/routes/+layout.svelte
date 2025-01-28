<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { Navbar } from '$lib';
</script>

<Navbar />
{@render children()}
