<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		icon?: Component;
		children: Snippet;
		inactiveClass: string;
		isActive: boolean;
		href: string;
	}

	const { icon: Icon, children, inactiveClass, isActive, href }: Props = $props();
	const className = $derived.by(() => {
		let result =
			'block rounded-[12px] w-full h-full flex flex-col md:flex-row items-center justify-center text-center md:gap-4 font-sans font-bold text-xs sm:text-base md:text-xl lg:text-3xl sm:uppercase transition-opacity ';
		if (isActive) {
			result += 'text-white';
		} else {
			result +=
				'opacity-70 hover:text-black dark:hover:text-white hover:opacity-100 focus:text-black dark:hover:text-white focus:opacity-100 active:opacity-90 ';
			result += inactiveClass;
		}

		return result.trimEnd();
	});
</script>

<div class="flex-grow basis-0 p-2 md:p-3">
	<a class={className} {href}>
		{#if Icon}
			<span class="text-2xl md:text-[length:inherit]">
				<Icon />
			</span>
		{/if}
		{@render children()}
	</a>
</div>
