<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';

	// @ts-ignore
	import IconArrowRight from '~icons/majesticons/arrow-right-line';

	// @ts-ignore
	import IconCube from '~icons/majesticons/cube';

	import untypedProjects from '../../data/projects.json';
	import { ProjectCarousel, SEO, type Project, type ProjectColor, type ProjectSection } from '$lib';

	const spacedContainer = 'container mx-auto px-8 md:px-12';
	const sections = untypedProjects as ProjectSection[];

	function cssVariable(color: ProjectColor | undefined) {
		if (!color) return '';

		if (typeof color === "string") {
			return `--project-color-light: ${color}; --project-color-dark: ${color};`;
		} else {
			return `--project-color-light: ${color.light}; --project-color-dark: ${color.dark};`;
		}
	}
</script>

<SEO title="Portfolio" />

{#snippet projectListItemContent(project: Project)}
	<div class="w-14 flex-shrink-0 relative text-project-color">
		{#if project.logo}
			<img src={project.logo} class="w-full h-full object-contain object-center {project.invertLogoOnDark ? 'dark-invert' : ''}" alt="" />
		{:else}
			<IconCube class="text-6xl opacity-30 absolute top-1/2 left-0 w-full text-center -translate-y-1/2" />
			<div class="text-4xl font-sans font-bold absolute top-1/2 left-0 w-full text-center -translate-y-1/2">{project.title.slice(0, 1).toLocaleUpperCase()}</div>
		{/if}
	</div>
	<div>
		<h4
			class="{project.color ? "list-project-title-color" : "group-hover:text-ocean-700 dark:group-hover:text-ocean-400 group-hover:decoration-ocean-700/50 dark:group-hover:decoration-ocean-400/50"} relative font-bold text-2xl {project.link ? 'underline link-base' : ''} transition-colors"
		>
			{project.title}
		</h4>
		<p class="italic">{project.description}</p>
		{#if project.cta}
		<div class="{project.link ? 'font-bold' : ''} opacity-70 text-sm mt-1">{project.cta} {#if project.link}<IconArrowRight class="-mt-0.5 inline-block" />{/if}</div>
		{/if}
	</div>
{/snippet}

<div class="absolute inset-0 -z-10 h-72 bg-ocean-700"></div>

<h1 class="font-sans text-6xl font-bold text-white text-center py-10">Portfolio</h1>

<div
	class="rounded-t-2xl py-12 sm:rounded-t-3xl bg-white dark:bg-ocean-950 dark:contrast-more:black projects-root"
>
	{#each sections as section}
	<h2 class="{spacedContainer} font-sans font-bold text-3xl mb-2 not-first:mt-12">{section.title}</h2>
	{#if section.presentation === 'carousel'}
	<ProjectCarousel projects={section.projects} />
	{:else}
	<ul class="{spacedContainer}">
	{#each section.projects as project}
		<li class="mt-6 break-words">
			{#if project.link}
			<a
				href={project.link}
				class="group flex active:opacity-80 transition-all hover:pl-1 gap-4 items-stretch list-project-item"
				style={cssVariable(project.color)}
				target="_blank"
			>
				{@render projectListItemContent(project)}
			</a>
			{:else}
			<div class="flex items-stretch list-project-item gap-4" style={cssVariable(project.color)}>
				{@render projectListItemContent(project)}
			</div>
			{/if}
		</li>
	{/each}
	</ul>
	{/if}
	{/each}

	<h2 class="{spacedContainer} font-sans font-bold text-3xl mb-2 mt-12">Still want more?</h2>
	<p class="{spacedContainer} text-lg">
		Check out my <a class="link" href="https://github.com/anli5005">GitHub</a> for even more things and random experiments.
	</p>
	<p class="{spacedContainer} text-lg mt-4">
		If you're looking for my resumé, please <a class="link" href="mailto:me@anli.dev">email me</a> and I'll send it over.
	</p>
</div>

<Footer becomesTransparent={false} />

<style>
	.list-project-item {
		--project-color: var(--project-color-light);
	}

	@media (prefers-color-scheme: dark) {
		.list-project-item {
			--project-color: var(--project-color-dark);
		}
	}

	.text-project-color {
		color: var(--project-color);
	}

	a.group:hover .list-project-title-color {
		color: var(--project-color);
		text-decoration-color: color-mix(in oklab, var(--project-color) 50%, transparent)
	}
</style>