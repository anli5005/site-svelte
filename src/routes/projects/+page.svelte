<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	// @ts-ignore
	import IconArrowLeft from '~icons/majesticons/arrow-left-line';

	// @ts-ignore
	import IconArrowRight from '~icons/majesticons/arrow-right-line';

	const spacedContainer = 'container mx-auto px-8 md:px-12';

	let carousel: HTMLDivElement | undefined = $state(undefined);
	let currentIndex = $state(0);

	let featuredProjects: {
		title: string;
		description: string;
		node?: HTMLDivElement;
	}[] = $state([
		{
			title: 'Penn Mobile',
			description: 'The University of Pennsylvania\'s official mobile app, developed by Penn Labs.'
		},
		{
			title: 'Kepler',
			description: 'Your Git repositories, right in front of you. Literally.'
		},
		{
			title: 'CIS 1951',
			description: 'An iOS course taught by yours truly at the University of Pennsylvania.'
		}
	]);

	let enableObserver = $state(true);
	let pauseAutoscrolling = $state(false);

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const oldIndex = currentIndex;
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const newIndex = parseInt((entry.target as HTMLDivElement).dataset.index!);
						if (enableObserver) {
							if (oldIndex !== newIndex) {
								currentIndex = newIndex;
								pauseAutoscrolling = true;
							}
						} else {
							if (oldIndex === newIndex) {
								enableObserver = true;
							}
						}
					}
				}
			},
			{
				root: carousel,
				threshold: 1.0
			}
		);

		featuredProjects.forEach((project) => {
			if (project.node) {
				observer.observe(project.node);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

	const isAtStart = $derived(currentIndex === 0);
	const isAtEnd = $derived(currentIndex === featuredProjects.length - 1);

	function scrollTo(index: number, source: 'user' | 'auto') {
		const node = featuredProjects[index].node;

		if (source === 'user') {
			pauseAutoscrolling = true;
		}

		if (carousel && node) {
			enableObserver = false;
			currentIndex = index;

			node.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'nearest'
			});
		}
	}

	$effect(() => {
		if (pauseAutoscrolling) return;

		const interval = setInterval(() => {
			if (isAtEnd) {
				scrollTo(0, 'auto');
			} else {
				scrollTo(currentIndex + 1, 'auto');
			}
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="absolute inset-0 -z-10 h-72 bg-ocean-700"></div>

<h1 class="font-sans text-6xl font-bold text-white text-center py-10">Portfolio</h1>

<div
	class="rounded-t-2xl py-12 sm:rounded-t-3xl bg-white dark:bg-ocean-950 dark:contrast-more:black"
>
	<h2 class="{spacedContainer} font-sans font-bold text-3xl mb-6">Featured Projects</h2>
	<div class="relative">
		<div
			class="overflow-auto w-full flex gap-4 carousel snap-x snap-mandatory"
			bind:this={carousel}
		>
			{#each featuredProjects as project, index}
				<div
					bind:this={project.node}
					data-index={index}
					class="bg-ocean-700 rounded-xl p-4 h-50 lg:h-64 w-54 sm:w-100 lg:w-200 flex-shrink-0 snap-start h-lg flex flex-col items-start justify-end"
					style="scroll-margin-left: var(--carousel-margin); scroll-margin-right: var(--carousel-margin);"
				>
					<h3 class="font-sans font-bold text-xl md:text-2xl">{project.title}</h3>
					<p class="italic text-sm sm:text-base md:text-lg">
						{project.description}
					</p>
				</div>
			{/each}
		</div>

		<button
			onclick={() => scrollTo(currentIndex - 1, 'user')}
			class="absolute top-1/2 left-1 sm:left-4 transform -translate-y-1/2 bg-ocean-900 w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-xl rounded-full transition-opacity {isAtStart
				? 'opacity-0 pointer-events-none'
				: 'opacity-100 hover:opacity-80 active:opacity-70'} cursor-pointer"
			disabled={isAtStart}
		>
			<IconArrowLeft />
		</button>

		<button
			onclick={() => scrollTo(currentIndex + 1, 'user')}
			class="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 bg-ocean-900 w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-xl rounded-full transition-opacity {isAtEnd
				? 'opacity-0 pointer-events-none'
				: 'opacity-100 hover:opacity-80 active:opacity-70'} cursor-pointer hover:opacity-80 active:opacity-70"
			disabled={isAtEnd}
		>
			<IconArrowRight />
		</button>
	</div>

	<h2 class="{spacedContainer} font-sans font-bold text-3xl mt-16">Even More Projects</h2>
</div>

<Footer becomesTransparent={false} />
