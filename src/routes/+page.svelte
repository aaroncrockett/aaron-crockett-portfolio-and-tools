<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import ProjectShowCases from './(partials)/ProjectShowCases.svelte';
	import References from './(partials)/References.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';
</script>

<PageCover />
<div class="page">
	<div class="page-section variant-ringed-secondary rounded">
		<ProjectShowCases />
	</div>
	<div>
		<SummaryCV />
	</div>
	<div>
		<References />
	</div>
	<div>
		<AboutMe />
	</div>
</div>
