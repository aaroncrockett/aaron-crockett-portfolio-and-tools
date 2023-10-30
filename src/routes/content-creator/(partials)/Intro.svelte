<script lang="ts">
	import { persisted } from 'svelte-persisted-store';

	export const hideIntro = persisted('hideIntro', false);
</script>

<div class="flex justify-between items-center">
	<h3 class="page-header">Content Creator</h3>

	<div class="flex justify-center">
		<input
			class="checkbox checkbox-sm"
			type="checkbox"
			id="hide-customer-intro"
			name="hide-customer-intro"
			bind:checked={$hideIntro}
		/>

		<label for="hide-customer-intro" class="pl-1 label">Hide Intro</label>
	</div>
</div>
{#if !$hideIntro}
	<div class="customer-intro flex flex-col gap-2 variant-glass-surface rounded p-4">
		<p class="italic variant-ghost-tertiary p-2 rounded">Currently under development.</p>
		<p class="italic variant-ghost-error p-2 rounded">
			Designed for desktop use only. May not function correctly on mobile.
		</p>
		<h4>A tool to create content with attached styling, tags, quizzes, notes and more.</h4>
		<p class="font-bold">Edit the content bellow:</p>
		<p class="italic">current keyboard shortcuts:</p>
		<ul>
			<li>cmd:h+1</li>
			<li>cmd:h+2</li>
			<li>cmd:l+1</li>
			<li>cmd:l+2</li>
			<li>cmd:l+0</li>
		</ul>
	</div>
{/if}
