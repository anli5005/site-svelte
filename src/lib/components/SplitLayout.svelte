<script lang="ts" module>
	import { setContext, type Snippet } from 'svelte';

	type Breakpoint = 'md' | 'lg';
	interface Props {
		children: Snippet;
		breakpoint?: Breakpoint;
	}

	export const breakpointContextName = 'SplitLayoutBreakpoint';
</script>

<script lang="ts">
	import Footer from './Footer.svelte';

	const { children, breakpoint = 'lg' }: Props = $props();
	setContext(breakpointContextName, breakpoint);

	const responsiveClasses = $derived.by(() => {
		if (breakpoint === 'lg') {
			return 'lg:flex-row lg:items-start lg:mt-12';
		} else {
			return 'md:flex-row md:items-start md:mt-12';
		}
	});
</script>

<div class="sm:px-4 md:px-12">
	<div class="container mx-auto flex flex-col items-center mt-8 {responsiveClasses}">
		{@render children()}
	</div>
	<Footer />
</div>
