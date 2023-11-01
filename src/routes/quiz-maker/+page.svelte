<script lang="ts">
	import QuizMaker from '$lib/components/Quiz/QuizMaker.svelte';

	async function submitQuiz(event) {
		console.log(event);
	}
</script>

<div class="page-one-col">
	<QuizMaker on:submit={submitQuiz} />
</div>
