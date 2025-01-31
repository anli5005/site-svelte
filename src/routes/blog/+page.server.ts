import { getPosts } from '$lib/blog.server';
import type { PageServerLoad } from './$types';
import type { BlogData } from './+page.svelte';

export const load: PageServerLoad<BlogData> = () => {
	return { posts: getPosts() };
};

export const prerender = true;
