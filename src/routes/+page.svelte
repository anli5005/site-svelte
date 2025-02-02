<script lang="ts">
	import SplitLayout from '$lib/components/SplitLayout.svelte';
	import SplitLayoutContent from '$lib/components/SplitLayoutContent.svelte';

	let isFrench = $state(false);

	$effect(() => {
		if (typeof navigator !== 'undefined' && navigator.language) {
			isFrench = navigator.language.startsWith('fr');
		}
	});
</script>

<SplitLayout breakpoint="md">
	<div
		class="flex-shrink-0 md:w-64 h-[16.6rem] md:h-[initial] my-auto relative md:sticky md:bottom-[50vh]"
	>
		<img
			class="block w-48 h-48 rounded-full bg-white/10"
			src="/pfp-transp.webp"
			alt="Picrew of an anime-style character with short hair in a gradient of green, blue, and purple, wearing a black hoodie and holding a red mug, smiling with a cheerful expression."
		/>
		<svg
			viewBox="0 -25 32 50"
			width="64"
			height="100"
			class="block w-[64px] h-[100px] rotate-90 mt-4 md:mt-0 md:rotate-0 absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:right-[-24px] md:top-1/2 md:-translate-y-1/2 md:ml-auto pointer-events-none text-white dark:text-ocean-950 dark:contrast-more:text-black"
			style="mask: linear-gradient(to right, black 63%, transparent 100%);"
		>
			<path
				d="M 0 0 C 0 5, 20 15, 20 20 A 5 5 0 0 0 25 25 L 60 25 L 60 -25 L 25 -25 A 5 5 0 0 0 20 -20 C 20 -15, 0 -5, 0 0"
				fill="currentColor"
			/>
		</svg>
		<div class="absolute mt-1 text-xs md:mt-2 w-48 text-white/50 text-center md:text-sm">
			<a class="hover:underline" href="https://picrew.me/en/image_maker/210483" target="_blank"
				>pfp credit</a
			>
		</div>
	</div>
	<SplitLayoutContent>
		{#if !isFrench}
			<div
				class="font-sans bg-gradient-to-tr text-transparent bg-clip-text from-grape-600 via-ocean-700 to-sage-600 dark:from-ocean-400 dark:to-sage-400 w-fit mb-4"
			>
				<h1 class="font-semibold text-6xl sm:text-7xl">Hi! I'm Anthony Li.</h1>
			</div>

			<p class="text-2xl mb-4"><strong>I make things.</strong></p>
			<p class="text-xl mb-4">
				Find me on <a class="link" target="_blank" href="https://github.com/anli5005">GitHub</a>,
				<a class="link" target="_blank" href="https://bsky.app/profile/anli.dev">Bluesky</a>,
				<a class="link" target="_blank" href="https://twitter.com/anli5005"
					>what was once the bird site</a
				>, or
				<a class="link" target="_blank" href="https://linkedin.com/in/anlidev">LinkedIn</a>.
			</p>
			<p class="text-xl mb-4">
				Shoot me an email at <a class="link" href="mailto:me@anli.dev">me@anli.dev</a>.
			</p>

			<p class="mb-4">
				I'm a student at the University of Pennsylvania, studying CS and entrepreneurship as part of
				the <a class="link" href="https://fisher.wharton.upenn.edu/">Management &amp; Technology</a>
				dual degree program. I enjoy putting technology to work, whether it's in web and iOS development,
				low-level systems, AR/VR, DevOps, or even machine learning.
			</p>

			<p class="mb-4">
				I've worked at companies like <a class="link" href="https://ramp.com">Ramp</a> and
				<a class="link" href="https://apple.com">Apple</a>, and I'm part of
				<a class="link" href="https://pennlabs.org">Penn Labs</a>, where we develop
				<a class="link" href="https://pennlabs.org/products">essential software</a> for the student body.
			</p>

			<p class="mb-4">
				When I'm not coding, I enjoy dabbling in video production, <button
					class="link"
					onclick={() => (isFrench = true)}>speaking French</button
				>, and consuming an obscenely high amount of boba.
			</p>

			<p>On this website, you'll find a few of my musings and projects. Feel free to explore!</p>
		{:else}
			<div
				class="font-sans bg-gradient-to-tr text-transparent bg-clip-text from-grape-600 via-ocean-700 to-sage-600 dark:from-ocean-400 dark:to-sage-400 w-fit mb-4"
			>
				<h1 class="font-semibold text-5xl sm:text-7xl">Salut ! Je suis Anthony Li.</h1>
			</div>

			<p class="mb-4 text-sm opacity-70 italic">
				(Je m'excuse en avance pour la mauvaise qualité de mon français <del
					>que j'ai écrit entièrement sans assistance de l'IA</del
				>.)
			</p>

			<p class="text-2xl mb-4"><strong>Je contruis des trucs.</strong></p>
			<p class="text-xl mb-4">
				Trouvez-moi sur <a class="link" target="_blank" href="https://github.com/anli5005">GitHub</a
				>,
				<a class="link" target="_blank" href="https://bsky.app/profile/anli.dev">Bluesky</a>,
				<a class="link" target="_blank" href="https://twitter.com/anli5005"
					>ce qui était autrefois le site d'oiseau</a
				>
				ou
				<a class="link" target="_blank" href="https://linkedin.com/in/anlidev">LinkedIn</a>.
			</p>
			<p class="text-xl mb-4">
				Envoyez-moi un email à <a class="link" href="mailto:me@anli.dev">me@anli.dev</a>.
			</p>

			<p class="mb-4">
				Actuellement étudiant à l'University de Pennsylvanie, j'étudie l'informatique and
				l'entrepreneuriat en tant que membre du programme de double diplôme <a
					class="link"
					href="https://fisher.wharton.upenn.edu/">Management &amp; Technology</a
				>. J'aime mettre la technologie en route, y compris le web, l'iOS, les systèmes de bas
				niveau, l'AR/VR, le DevOps et même l'apprentissage automatique.
			</p>

			<p class="mb-4">
				J'ai travaillé à des sociétés innovantes comme <a class="link" href="https://ramp.com"
					>Ramp</a
				>
				et
				<a class="link" href="https://apple.com">Apple</a>, et je suis partie de
				<a class="link" href="https://pennlabs.org">Penn Labs</a>, où nous développons des
				<a class="link" href="https://pennlabs.org/products">logiciels essentiels</a> pour le corps des
				étudiants.
			</p>

			<p class="mb-4">
				À part de codage, j'aime bien la production vidéo, <button
					class="link"
					onclick={() => (isFrench = false)}>le parlage de français</button
				> et la consommation d'une quantité concernante de boba.
			</p>

			<p>
				Vous trouverez quelques-uns de mes pensées et mes projets ici. N'hésitez pas à explorer!
			</p>
		{/if}
	</SplitLayoutContent>
</SplitLayout>

<div class="bg-gradient-hero fixed inset-0 -z-10"></div>
