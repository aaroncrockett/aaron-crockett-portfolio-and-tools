import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
