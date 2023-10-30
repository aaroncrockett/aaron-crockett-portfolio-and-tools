<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import ProjectShowCasesSkeletalPart from './(partials)/ProjectShowCasesSkeletalPart.svelte';
	import References from './(partials)/References.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';
	// Svelte related
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	let triggerOnMountTransitions = false;

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 400 }}>
		<PageCover />
	</div>
{/if}
<div class="page-one-col">
	<section class=" variant-ringed-secondary rounded">
		<h2 class="page-header text-center">Project Showcases</h2>
		<ProjectShowCasesSkeletalPart />
	</section>
	<section>
		<SummaryCV />
	</section>
	<section>
		<References />
	</section>
	<section>
		<AboutMe />
	</section>
</div>
