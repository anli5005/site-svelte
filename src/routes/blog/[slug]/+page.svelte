<script lang="ts">
	import type { Post } from '$lib';

	// @ts-ignore
	import IconBack from '~icons/majesticons/arrow-circle-left';

	export interface BlogPostData {
		post: Post;
	}

	const { data }: { data: BlogPostData } = $props();
</script>

<div class="sm:px-4 md:pl-0 md:pr-12">
	<div
		class="container mx-auto flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-12 mb-12"
	>
		<div class="flex-shrink-0 md:w-52 md:mx-12 pb-12 text-center text-white">
			<div class="md:h-12 mb-6 md:mb-0 flex items-start justify-center">
				<a
					href="/blog"
					class="flex items-center justify-center gap-2 w-fit px-4 py-2 md:-mt-2 opacity-70 bg-white/0 hover:bg-white/10 active:bg-white/20 focus:bg-white/10 rounded-xl transition-colors"
					><IconBack class="mt-0.5" /> <span class="underline">All Posts</span></a
				>
			</div>
			<h1 class="font-sans text-4xl font-bold mb-2 md:mb-6 break-words">
				{data.post.title}
			</h1>
			<div class="opacity-80">
				{data.post.date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</div>
		</div>
		<div
			class="w-full flex-grow rounded-3xl bg-white dark:bg-ocean-950 px-8 py-8 md:px-12 dark:contrast-more:bg-black"
		>
			<div class="prose-anli">
				<data.post.content />
			</div>
		</div>
	</div>
	<footer class="pb-12 text-center text-white/70 w-full">&copy; 2025 Anthony Li</footer>
</div>

<div class="bg-sage-600 fixed inset-0 -z-10"></div>
