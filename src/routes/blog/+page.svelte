<script lang="ts">
	import { SEO, type PostMetadata } from '$lib';
	import SplitLayout from '$lib/components/SplitLayout.svelte';
	import SplitLayoutContent from '$lib/components/SplitLayoutContent.svelte';
	import SplitLayoutHeader from '$lib/components/SplitLayoutHeader.svelte';

	// @ts-ignore
	import IconBlog from '~icons/majesticons/paper-fold-text-line';

	// @ts-ignore
	import IconArrowRight from '~icons/majesticons/arrow-right-line';
	import SplitLayoutBackground from '$lib/components/SplitLayoutBackground.svelte';

	export interface BlogData {
		posts: PostMetadata[];
	}

	const { data }: { data: BlogData } = $props();
</script>

<SEO title="Blog" />

<SplitLayout>
	<SplitLayoutHeader>
		<h1 class="font-sans text-6xl font-bold text-white text-center">Blog</h1>
		<div class="mt-8 text-8xl hidden lg:block">
			<IconBlog />
		</div>

		<SplitLayoutBackground class="bg-sage-600" />
	</SplitLayoutHeader>
	<SplitLayoutContent>
		{#if data.posts.length === 0}
		<p>There's nothing here right now. Check back soon!</p>
		{:else}
		<ul>
			{#each data.posts as post}
				<li class="mb-8 last:mb-0 break-words">
					<a
						href="/blog/{post.slug}"
						class="group block active:opacity-80 transition-all hover:pl-1"
					>
						<div>
							{post.date.toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</div>
						<h4
							class="relative font-bold text-xl underline link-base group-hover:text-sage-600 dark:group-hover:text-sage-400 group-hover:decoration-sage-600/50 dark:group-hover:decoration-sage-400/50 transition-colors"
						>
							<IconArrowRight
								class="absolute top-1/2 -left-8 transform -translate-y-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-100"
							/>
							{post.title}
						</h4>
						{#if post.subtitle}
							<p class="opacity-70 text-sm italic">{post.subtitle}</p>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
		{/if}
	</SplitLayoutContent>
</SplitLayout>