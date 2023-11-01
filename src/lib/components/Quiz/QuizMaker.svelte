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
</script>

<section>
	<h3>Quiz Maker</h3>
	<form
		on:submit={() =>
			dispatch('quiz', {
				questions
			})}
		class="flex flex-col gap-2"
	>
		{#each questions as question, i}
			<div class="mb-4 flex flex-col gap-2">
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

				<div class="flex flex-col gap-2 p-4 bg-surface-200/30 rounded">
					{#each questions[i].options as option, j}
						<div class="">
							<label for="option" class="label"> Option: </label>
							<input
								name="option"
								type="text"
								class="input w-2/3"
								bind:value={questions[i].options[j]}
								placeholder="Option"
							/>
						</div>
						<div class="flex ml-4 border-b-2 border-surface-200 pb-2">
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
		<div><button class="btn variant-ghost-primary" type="submit">Submit Quiz</button></div>
	</form>
</section>
