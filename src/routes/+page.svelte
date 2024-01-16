<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import Designs from './(partials)/Designs.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import ProjectShowCases from './(partials)/ProjectShowCases.svelte';
	import References from './(partials)/References.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';

	// Svelte related
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { page } from '$app/stores';

	let triggerOnMountTransitions = false;

	$: returnHome = $page.url.search === '?return-home';

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

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

<div class="page-one-col">
	<h1 class="hp-hide-headings">Aaron Crockett</h1>
	<h2 class="hp-hide-headings">Web Application Developer.</h2>
	<ProjectShowCases />
	<Designs />
	<SummaryCV />
	<AboutMe />
</div>

<style>
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
