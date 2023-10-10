<script lang="ts">
	import AboutMe from './(partials)/AboutMe.svelte';
	import PageCover from './(partials)/PageCover.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';
	import ProjectShowCases from './(partials)/ProjectShowCases.svelte';
</script>

<PageCover />
<div class="flex flex-col gap-4">
	<div class="mx-auto container p-4 gap-4 flex flex-col">
		<ProjectShowCases />
	</div>
	<div>
		<SummaryCV />
	</div>
	<div>
		<AboutMe />
	</div>
</div>

<!-- about section -->
<!-- maybe blog or linked articles -->
<!-- footer -->
