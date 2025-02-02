<script lang="ts">
	import { page } from '$app/state';
	import NavbarBackground from './NavbarBackground.svelte';
	import NavbarTab from './NavbarTab.svelte';

	// @ts-ignore
	import IconHome from '~icons/majesticons/home';

	// @ts-ignore
	import IconBlog from '~icons/majesticons/paper-fold-text';

	// @ts-ignore
	import IconPortfolio from '~icons/majesticons/briefcase';

	// @ts-ignore
	import IconMisc from '~icons/majesticons/test-tube-filled';

	const isHome = $derived(page.route.id === '/');
	const isBlog = $derived(page.route.id?.startsWith('/blog') || false);
	const isPortfolio = $derived(page.route.id?.startsWith('/projects') || false);
	const isMisc = $derived(page.route.id?.startsWith('/misc') || false);

	const currentTab = $derived.by(() => {
		if (isHome) return 0;
		if (isBlog) return 1;
		if (isPortfolio) return 2;
		if (isMisc) return 3;
		return -1;
	});
</script>

<div class="h-20 md:h-16 lg:h-24 relative">
	<NavbarBackground tabs={4} {currentTab} />
	<div class="absolute inset-0 flex w-full items-stretch">
		<NavbarTab
			inactiveClass="hover:bg-gradient-to-tr focus:bg-gradient-to-tr from-grape-600/30 via-ocean-700/30 to-sage-600/30"
			icon={isHome ? IconHome : undefined}
			isActive={isHome}
			href="/"
		>
			{#if isHome}
				Home
			{:else}
				<img class="block rounded-full h-12 md:h-8 lg:h-12" src="/pfp.webp" alt="" />
				<span class="text-xl lg:text-3xl sr-only md:not-sr-only normal-case">Anthony Li</span>
			{/if}
		</NavbarTab>
		<NavbarTab
			inactiveClass="hover:bg-sage-600/30 focus:bg-sage-600/30"
			isActive={isBlog}
			icon={IconBlog}
			href="/blog"
		>
			Blog
		</NavbarTab>
		<NavbarTab
			inactiveClass="hover:bg-ocean-500/30 focus:bg-ocean-500/30"
			isActive={isPortfolio}
			icon={IconPortfolio}
			href="/projects"
		>
			Portfolio
		</NavbarTab>
		<NavbarTab
			inactiveClass="hover:bg-grape-600/30 focus:bg-grape-600/30"
			isActive={isMisc}
			icon={IconMisc}
			href="/misc"
		>
			Misc
		</NavbarTab>
	</div>
</div>
