<script lang="ts">
	import type { Question } from '$lib/types';

	export let questions: Question[];

	let selectedAnswers = new Array(questions.length).fill(null).map(() => []);
	let score = 0;
	let missed = 0;
	let submitted = false;

	// Might need.
	// function resetQuiz() {
	// 	selectedAnswers = new Array(questions.length).fill(null).map(() => []);
	// 	score = 0;
	// 	missed = 0;
	// 	submitted = false;
	// }

	function checkAnswers() {
		score = 0;
		for (let i = 0; i < questions.length; i++) {
			const selectedIndices = selectedAnswers[i].reduce((acc, val, index) => {
				if (val) acc.push(index);
				return acc;
			}, []);
			if (JSON.stringify(questions[i].correct.sort()) === JSON.stringify(selectedIndices.sort())) {
				score++;
			}
		}
		missed = questions.length - score;
		submitted = true;
	}
</script>

<h1>Multiple Choice Quiz</h1>
{#each questions as { question, options, correct }, i}
	<div>
		<p>{question}</p>
		{#each options as option, j}
			<label>
				<input type="checkbox" bind:checked={selectedAnswers[i][j]} value={j} />
				{option}
			</label>
		{/each}
	</div>
{/each}
{#if !submitted}
	<div>
		<button class="p-2 btn variant-ghost-primary" on:click={checkAnswers}>Submit</button>
	</div>
{/if}
<p>Your score is: {score}</p>
<p>You missed: {missed}</p>
