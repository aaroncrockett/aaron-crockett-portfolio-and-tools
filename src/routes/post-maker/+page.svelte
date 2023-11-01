<script lang="ts">
	import QuizMaker from '$lib/components/Quiz/QuizMaker.svelte';

	async function submitQuiz(event) {
		console.log(event);
	}
</script>

<div class="page-one-col">
	<h2 class="page-header text-primary-500">Create a post</h2>
	<!-- <CreatePost /> -->
	<QuizMaker on:submit={submitQuiz} />
</div>
