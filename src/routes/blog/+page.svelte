<script>
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// UI Related
	import * as feather from 'feather-icons';

	export let data;

	let triggerOnMountTransitions = false;

	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#000000',
		width: 12,
		height: 12
	});
	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<!-- This blog will be done in markdown. And dynamic sidebar. This is a placeholder -->
{#if triggerOnMountTransitions}
	<div class="page-one-col" transition:fade={{ easing: cubicIn, duration: 400 }}>
		<ul class="preview-posts preview-full space-y-2">
			{#each data.posts as post}
				<li class="pb-2 border-b preview-post-item border-surface-300">
					<a href="/blog/{post.slug}" class="flex items-center title inline-link">{post.title}</a>
					<p class="date">{formatDate(post.date)}</p>
					<p class="description">{post.description}</p>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<!-- keep local to this file for right now -->
<style lang="postcss">
	.page-two-col {
		@apply grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] mx-auto container gap-2;
	}
	.preview-posts .title {
		@apply uppercase font-bold;
	}
	.preview-posts .date {
		@apply text-sm;
	}
	.page-col {
		@apply p-2 pt-4;
	}
</style>
