import { convertMetadata, type PostMetadata, type PostModule } from '$lib/blog';

export function getPosts(): PostMetadata[] {
	const paths: Record<string, PostModule> = import.meta.glob('/src/posts/*/post.md', { eager: true });
	return Object.entries(paths)
		.map(([path, module]) => {
			const parts = path.split('/');
			const slug = parts[parts.length - 2];

			return { ...convertMetadata(module.metadata), slug };
		})
		.toSorted((a, b) => b.date.getTime() - a.date.getTime());
}
