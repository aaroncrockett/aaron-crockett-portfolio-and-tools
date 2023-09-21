<script lang="ts">
	import PageCover from './(partials)/PageCover.svelte';
	import SummaryCV from './(partials)/SummaryCV.svelte';
	import InteractiveCv from './(partials)/InteractiveCV.svelte';
	import { auth } from '$lib/firebaseClient';
	import { userStore } from 'sveltefire';
	import SummaryCv from './(partials)/SummaryCV.svelte';
	const user = userStore(auth);
</script>

<!-- User should be undefined -->
<main>
	<PageCover />
	<div class="pt-4">
		<InteractiveCv />
	</div>

	<div class="pt-4">
		<SummaryCV />
	</div>
</main>

<!-- about section -->
<!-- maybe blog or linked articles -->
<!-- footer -->
