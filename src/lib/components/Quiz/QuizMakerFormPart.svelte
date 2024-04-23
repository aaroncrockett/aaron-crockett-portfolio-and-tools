<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let questions = [{ question: '', options: ['', ''], correct: [] }];

	function updateCorrect(i: number, j: number, checked: boolean) {
		if (checked) {
			questions[i].correct.push(j);
		} else {
			questions[i].correct = questions[i].correct.filter((num) => num !== j);
		}
	}
	function handleSubmit() {
		dispatch('addQuiz', questions);
	}
</script>

<section>
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		{#each questions as question, i}
			<div class="mb-4 space-y-2">
				<div class="">
					<label for="question"> Question: </label>
					<input
						name="question"
						type="text"
						class="input"
						bind:value={questions[i].question}
						placeholder="Question"
					/>
				</div>

				<div class="p-4 rounded space-y-2 bg-surface-200/30">
					{#each questions[i].options as option, j}
						<div class="">
							<label for="option" class="label"> Option: </label>
							<input
								name="option"
								type="text"
								class="w-2/3 input"
								bind:value={questions[i].options[j]}
								placeholder="Option"
							/>
						</div>
						<div class="flex pb-2 ml-4 border-b-2 border-surface-200">
							<input
								type="checkbox"
								name="is-correct"
								checked={questions[i].correct.includes(j)}
								class="checkbox"
								on:change={(e) => updateCorrect(i, j, e?.target?.checked)}
							/>
							<label for="is-correct" class="ml-1 label"> Is Correct? </label>
						</div>
					{/each}
					{#if questions[i].options.length < 4}
						<div class="ml-4">
							<button
								class="btn variant-ghost-secondary btn-sm"
								type="button"
								on:click={() => (questions[i].options = [...questions[i].options, ''])}
								>Add Option</button
							>
						</div>
					{/if}
				</div>
			</div>
		{/each}

		<div>
			<button
				type="button"
				class="btn variant-ghost-secondary"
				on:click={() =>
					(questions = [...questions, { question: '', options: ['', ''], correct: [] }])}
			>
				Add Question
			</button>
		</div>
		<div>
			<button class="btn variant-ghost-primary" on:click={handleSubmit}>Submit Quiz</button>
		</div>
	</form>
</section>
