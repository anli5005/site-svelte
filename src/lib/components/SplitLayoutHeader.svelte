<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { breakpointContextName } from './SplitLayout.svelte';

	const {
		children,
		layoutClasses = 'flex flex-col items-center justify-center text-center',
		formattingClasses = 'text-center text-white',
		applySpacing = true,
		additionalClasses = ''
	}: {
		children: Snippet;
		layoutClasses?: string;
		formattingClasses?: string;
		additionalClasses?: string;
		applySpacing?: boolean;
	} = $props();

	const breakpoint = getContext(breakpointContextName);

	const responsiveClasses = $derived.by(() => {
		if (breakpoint === 'lg') {
			let classes = 'lg:w-64 lg:pr-8';
			if (applySpacing) {
				classes += ' px-8 md:px-12 lg:px-0 pb-8 md:pt-4 md:pb-12 lg:py-12';
			}

			return classes;
		} else {
			let classes = 'md:w-64 md:pr-8';
			if (applySpacing) {
				classes += ' px-8 md:px-0 pb-8 md:py-12';
			}

			return classes;
		}
	});
</script>

<div
	class="flex-shrink-0 w-full relative {responsiveClasses} {layoutClasses} {formattingClasses} {additionalClasses}"
>
	{@render children()}
</div>
