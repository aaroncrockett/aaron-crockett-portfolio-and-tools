<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import Designs from './(partials)/Designs.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import ProjectShowCases from './(partials)/ProjectShowCases.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';

	// Svelte related
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { page } from '$app/stores';

	const allInview = getContext<Writable<boolean>>('all-inview');

	let triggerOnMountTransitions = false;

	const completedViews = {
		projectShowCases: false,
		designs: false,
		summaryCV: false,
		aboutMe: false
	};

	$: returnHome = $page.url.search === '?return-home';

	function handleInviewComplete(event: any) {
		completedViews[event.detail.value] = true;

		if (event.detail.value === 'aboutMe') $allInview = true;
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<svelte:head>
	<title>Aaron Crockett - Web Application Developer</title>
</svelte:head>

{#if !returnHome && triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 400 }}>
		<PageCover />
	</div>
{/if}
{#if returnHome}
	<div class="mx-auto container px-4 pt-1">
		<a class="font-bold text-secondary-900/90 text-sm" href="/">Re-animate intro.</a>
	</div>
{/if}

<div class="ac-hp page-one-col pt-0">
	<h1 class="hp-hide-headings">Aaron Crockett</h1>
	<h2 class="hp-hide-headings">Web Application Developer.</h2>
	<ProjectShowCases {returnHome} on:inview-complete={handleInviewComplete} />
	{#if completedViews.projectShowCases}
		<Designs on:inview-complete={handleInviewComplete} />
	{/if}

	{#if completedViews.designs}
		<SummaryCV on:inview-complete={handleInviewComplete} />
	{/if}

	{#if completedViews.summaryCV}
		<AboutMe on:inview-complete={handleInviewComplete} />
	{/if}
</div>

<style>
	:global(.ac-hp .img-responsive) {
		@apply max-w-full h-auto object-cover;
	}
	:global(.ac-hp .fade-in-view) {
		@apply transition-opacity duration-700 ease-in-out delay-500;
	}
	.hp-hide-headings {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
