<script lang="ts">
	import PageCover from './(partials)/PageCover.svelte';
	import InteractiveCv from './(partials)/InteractiveCV.svelte';
	import { auth } from '$lib/firebaseClient';
	import { userStore } from 'sveltefire';
	const user = userStore(auth);
</script>

<!-- User should be undefined -->
<p>Hello authed: {$user?.uid}</p>

<PageCover />
<InteractiveCv />
<!-- about section -->
<!-- maybe blog or linked articles -->
<!-- footer -->
