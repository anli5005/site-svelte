<script lang="ts">
	import type { Post } from '$lib';

	export interface BlogPostData {
		post: Post;
	}

	const { data }: { data: BlogPostData } = $props();
</script>

<div class="sm:px-4 md:pl-0 md:pr-12">
	<div
		class="container mx-auto flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-12 mb-12"
	>
		<div class="flex-shrink-0 md:w-52 md:mx-12">
			<h1 class="mb-8 font-sans text-6xl font-bold text-white text-center">Blog</h1>
		</div>
		<div
			class="w-full flex-grow rounded-3xl bg-white dark:bg-ocean-950 px-8 py-12 md:px-12 dark:contrast-more:bg-black"
		>
			<h1 class="font-sans text-5xl font-bold mb-8">{data.post.title}</h1>
			<div class="prose-anli">
				<data.post.content />
			</div>
		</div>
	</div>
	<footer class="pb-12 text-center text-white/70 w-full">&copy; 2025 Anthony Li</footer>
</div>

<div class="bg-sage-600 fixed inset-0 -z-10"></div>
