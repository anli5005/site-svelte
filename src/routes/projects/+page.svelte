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
		link: string;
		image?: string;
		node?: HTMLAnchorElement;
	}[] = $state([
		{
			title: 'Penn Mobile',
			description: "The University of Pennsylvania's official mobile app, developed by Penn Labs.",
			link: 'https://pennlabs.org/products/penn-mobile',
			image: 'https://wp.anli.dev/wp-content/uploads/2024/07/IMG_5931.jpeg'
		},
		{
			title: 'kepler',
			description: 'Your Git repositories, right in front of you. Literally.',
			link: 'https://devpost.com/software/otis-gitgraph',
			image: 'https://i.imgur.com/De6Z9aR.gif'
		},
		{
			title: 'CIS 1951',
			description: 'An iOS course taught by yours truly at the University of Pennsylvania.',
			link: 'https://www.seas.upenn.edu/~cis1951/',
			image: 'https://wp.anli.dev/wp-content/uploads/2024/07/cis1951.png'
		}
	]);

	let enableObserver = $state(true);

	// TODO: Need to prevent autoscrolling when featured projects are out of view
	let pauseAutoscrolling = $state(true);

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
	class="rounded-t-2xl py-12 sm:rounded-t-3xl bg-white dark:bg-ocean-950 dark:contrast-more:black projects-root"
>
	<h2 class="{spacedContainer} font-sans font-bold text-3xl mb-2">Featured Projects</h2>
	<div class="relative">
		<div
			class="overflow-auto w-full flex items-center gap-4 carousel snap-x snap-mandatory h-54 lg:h-80"
			bind:this={carousel}
		>
			{#each featuredProjects as project, index}
				<a
					bind:this={project.node}
					data-index={index}
					href={project.link}
					target="_blank"
					class="overflow-hidden transform active:scale-[0.99] duration-300 transition-all text-white rounded-xl bg-ocean-700 h-50 lg:h-72 hover:h-full focus:h-full w-54 sm:w-100 lg:w-200 flex-shrink-0 snap-start block bg-center bg-cover bg-no-repeat"
					style="scroll-margin-left: var(--carousel-margin); scroll-margin-right: var(--carousel-margin); {project.image
						? `background-image: url(${project.image});`
						: ''}"
				>
					<div
						class="flex flex-col items-start justify-end w-full h-full p-4"
						style={project.image ? `background-image: var(--scrim-bottom)` : ''}
					>
						<h3 class="font-sans font-bold text-xl md:text-2xl">{project.title}</h3>
						<p class="italic text-sm sm:text-base md:text-lg">
							{project.description}
						</p>
					</div>
				</a>
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

<style>
	.projects-root {
		--scrim-bottom: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0.32),
			rgba(0, 0, 0, 0)
		);
	}
</style>
