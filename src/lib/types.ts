export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

// Quiz types
export type Question = {
	question: string;
	options: string[];
	correct: number[];
};
