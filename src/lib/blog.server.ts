import { convertMetadata, type PostMetadata, type PostModule } from '$lib/blog';

export function getPosts(): PostMetadata[] {
	const paths: Record<string, PostModule> = import.meta.glob('/src/posts/*.md', { eager: true });
	return Object.entries(paths)
		.map(([path, module]) => {
			let slug = path.split('/').pop()!;
			if (slug.endsWith('.md')) {
				slug = slug.slice(0, -3);
			}

			return { ...convertMetadata(module.metadata), slug };
		})
		.toSorted((a, b) => b.date.getTime() - a.date.getTime());
}
