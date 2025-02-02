import type { Component } from 'svelte';

export interface PostMetadata {
	slug: string;
	title: string;
	subtitle?: string;
	date: Date;
}

export type Post = PostMetadata & {
	content: Component;
};

export interface PostModule {
	default: Component;
	metadata: {
		title: string;
		subtitle?: string;
		date: string;
	};
}

export function convertMetadata(metadata: PostModule['metadata']): Omit<PostMetadata, 'slug'> {
	return {
		...metadata,
		date: new Date(metadata.date)
	};
}

export async function getPost(slug: string): Promise<Post | undefined> {
	if (slug.includes('/')) {
		return undefined;
	}

	let module;
	try {
		module = (await import(`../posts/${slug}.md`)) as PostModule;
	} catch (e) {
		return undefined;
	}

	return {
		...convertMetadata(module.metadata),
		slug,
		content: module.default
	};
}
