<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import ProjectShowCases from './(partials)/ProjectShowCases.svelte';
	import References from './(partials)/References.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';
	//
	import Slider from '$lib/components/Slider/index.svelte';
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

<Slider />

{#if !returnHome && triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 400 }}>
		<PageCover />
	</div>
{/if}
<div class="page-one-col">
	<ProjectShowCases />
	<SummaryCV />
	<References />
	<AboutMe />
</div>
