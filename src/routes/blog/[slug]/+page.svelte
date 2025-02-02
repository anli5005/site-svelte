<script lang="ts">
	import type { Post } from '$lib';
	import { SplitLayout, SplitLayoutContent, SplitLayoutHeader } from '$lib';

	// @ts-ignore
	import IconBack from '~icons/majesticons/arrow-circle-left';

	export interface BlogPostData {
		post: Post;
	}

	const { data }: { data: BlogPostData } = $props();
</script>

<SplitLayout>
	<SplitLayoutHeader applySpacing={false} additionalClasses="px-8 md:px-12 lg:px-0 pb-8 lg:pb-12">
		<div class="lg:h-12 pb-2 flex items-end justify-center">
			<a
				href="/blog"
				class="flex items-center justify-center gap-2 w-fit px-4 py-2 md:-mt-2 opacity-70 bg-white/0 hover:bg-white/10 active:bg-white/20 focus:bg-white/10 rounded-xl transition-colors"
				><IconBack class="mt-0.5" /> All Posts</a
			>
		</div>
		<h1 class="font-sans text-4xl font-bold break-words">
			{data.post.title}
		</h1>
		{#if data.post.subtitle}
			<p class="break-words text-lg italic mt-2 mb-2 lg:mb-2">
				{data.post.subtitle}
			</p>
		{/if}
		<p class="mt-2">
			{data.post.date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</p>
	</SplitLayoutHeader>
	<SplitLayoutContent spacingClasses="px-8 py-4 md:px-12 lg:py-8">
		<div class="prose-anli">
			<data.post.content />
		</div>
	</SplitLayoutContent>
</SplitLayout>

<div class="bg-sage-600 fixed inset-0 -z-10"></div>
