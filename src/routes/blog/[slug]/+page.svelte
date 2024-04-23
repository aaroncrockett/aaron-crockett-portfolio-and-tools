<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// Skeleton
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	// Highlight js
	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';

	storeHighlightJs.set(hljs);

	// Register each imported language module
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	let triggerOnMountTransitions = false;

	export let data;

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
{#if triggerOnMountTransitions}
	<article class="page-one-col blog-page" transition:fade={{ easing: cubicIn, duration: 400 }}>
		<!-- Title -->

		<hgroup class="space-y-2">
			<h1 class="content-page-header text-primary-500">{data.meta.title}</h1>
			<div class="p-1 bg-gradient-to-r variant-gradient-primary-secondary" />
			<div class="p-2 rounded variant-ghost-secondary">
				<span class="block">
					<span class="font-bold text-secondary-800">Written By: </span></span
				><span class="text-xl font-bold">Aaron Crockett's AI Robot.</span>

				<span class="block italic font-bold"> {formatDate(data.meta.date)}</span>
			</div>
		</hgroup>
		<div class="tags">
			<span class="p-1 rounded bg-surface-100">
				{#each data.meta.categories as category}
					<span class="pr-2 font-bold surface-4 text-primary-500">&num;{category}</span>
				{/each}
			</span>
		</div>

		<!-- Tags -->

		<!-- Post -->
		<div class="flex flex-col py-2 mt-1 border-t-2 gap-2 border-surface-100">
			<svelte:component this={data.content} />
		</div>
	</article>
{/if}

<style lang="postcss">
	:global(.codeblock) {
		@apply my-2;
	}
	:global(ul) {
		@apply my-2;
	}
	:global(.codeblock) {
		@apply w-[45%];
	}
	:global(.code-wrap-iterator) {
		@apply flex flex-wrap gap-2;
	}
</style>
