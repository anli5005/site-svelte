<script lang="ts">
	import type { Project } from '$lib/projects';

	// @ts-ignore
	import IconArrowLeft from '~icons/majesticons/arrow-left-line';

	// @ts-ignore
	import IconArrowRight from '~icons/majesticons/arrow-right-line';

	let carousel: HTMLDivElement | undefined = $state(undefined);
	let currentIndex = $state(0);

    interface Props {
        projects: Project[];
    }

    const props: Props = $props();
    let projects: (Project & { node?: HTMLAnchorElement })[] = $state([]);

    $effect(() => {
        currentIndex = 0;
        projects = props.projects.map((project) => ({ ...project }));
    });

	let enableObserver = $state(true);

	// TODO: Need to prevent autoscrolling when featured projects are out of view
	let pauseAutoscrolling = $state(true);

	$effect(() => {
        if (projects.length === 0) return;

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

		projects.forEach((project) => {
			if (project.node) {
				observer.observe(project.node);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

	const isAtStart = $derived(currentIndex === 0 || projects.length === 0);
	const isAtEnd = $derived(currentIndex === projects.length - 1 || projects.length === 0);

	function scrollTo(index: number, source: 'user' | 'auto') {
		const node = projects[index].node;

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

<div class="relative">
    <div
        class="overflow-auto w-full flex items-center gap-4 carousel snap-x snap-mandatory h-54 lg:h-80"
        bind:this={carousel}
    >
        {#each projects as project, index}
            <a
                bind:this={project.node}
                data-index={index}
                href={project.link}
                target="_blank"
                class="group relative overflow-hidden transform active:scale-[0.99] duration-300 transition-all text-white rounded-xl h-50 lg:h-72 hover:h-full focus:h-full w-54 sm:w-100 lg:w-200 flex-shrink-0 snap-start block bg-center bg-cover bg-no-repeat {project.image ? '' : 'bg-ocean-700'}"
                style="scroll-margin-left: var(--carousel-margin); scroll-margin-right: var(--carousel-margin);"
            >
                {#if project.image}
                    <img class="block rounded-xl absolute left-0 top-1/2 -translate-y-1/2 w-full h-54 lg:h-80 object-cover object-center" src={project.image} alt="" />
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start justify-end w-full h-54 lg:h-80 p-4 carousel-project-scrim"></div>
                {/if}
                <div
                    class="absolute inset-0 flex flex-col items-start justify-end w-full h-full p-4"
                >
                    <h3 class="font-sans font-bold text-xl md:text-2xl leading-[1]">{project.title}</h3>
                    <p class="italic text-sm sm:text-base md:text-lg">
                        {project.description}
                    </p>
                    <div class="text-xs md:text-sm font-bold mt-1">
                        {project.cta} <IconArrowRight class="inline -mt-1" />
                    </div>
                </div>
            </a>
        {/each}
    </div>

    <button
        onclick={() => scrollTo(currentIndex - 1, 'user')}
        class="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 bg-ocean-100 dark:bg-ocean-900 w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-xl rounded-full transition-opacity {isAtStart
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100 hover:opacity-80 active:opacity-70'} cursor-pointer"
        disabled={isAtStart}
    >
        <IconArrowLeft />
    </button>

    <button
        onclick={() => scrollTo(currentIndex + 1, 'user')}
        class="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-ocean-100 dark:bg-ocean-900 w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-xl rounded-full transition-opacity {isAtEnd
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100 hover:opacity-80 active:opacity-70'} cursor-pointer hover:opacity-80 active:opacity-70"
        disabled={isAtEnd}
    >
        <IconArrowRight />
    </button>
</div>

<style>
	.carousel-project-scrim {
		--scrim-gradient-1: #065fc9ee;
		--scrim-gradient-2: #065fc9cc;
		--scrim-gradient-3: #065fc999;

		transition: --scrim-gradient-1 0.3s, --scrim-gradient-2 0.3s, --scrim-gradient-3 0.3s;

		background-image: linear-gradient(
			to top,
			var(--scrim-gradient-1) 0%,
			var(--scrim-gradient-2) 25%,
			var(--scrim-gradient-3) 50%
		);
	}

	.group:hover .carousel-project-scrim {
		--scrim-gradient-1: #000000ee;
		--scrim-gradient-2: #00000099;
		--scrim-gradient-3: #00000066;
	}

	@media (min-width: 64rem) {
		.carousel-project-scrim {
			--scrim-gradient-1: #065fc9ee;
			--scrim-gradient-2: #065fc977;
			--scrim-gradient-3: #065fc922;
		}

		.group:hover .carousel-project-scrim {
			--scrim-gradient-1: #000000ee;
			--scrim-gradient-2: #00000077;
			--scrim-gradient-3: #00000000;
		}
	}
</style>
