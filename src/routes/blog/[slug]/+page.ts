import { getPost } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { BlogPostData } from './+page.svelte';

export const load: PageLoad<BlogPostData> = async ({ params }) => {
	const post = await getPost(params.slug);
	if (!post) {
		error(404, 'Post not found');
	}

	return { post };
};
