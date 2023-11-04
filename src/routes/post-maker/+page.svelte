<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let triggerOnMountTransitions = false;
	let title = '';
	let categories = [];
	let tags = [];

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div class="page-one-col" transition:fade={{ easing: cubicIn, duration: 400 }}>
		<h2 class="page-header text-primary-500">Create a post</h2>
		<!-- <CreatePost /> -->
		<form method="POST" action="?/update" use:enhance class="space-y-2">
			<label for="question"> Question: </label>
			<input name="title" type="text" class="input" bind:value={title} placeholder="Question" />
			<button type="submit" class="btn variant-ghost-primary">SUBMIT</button>
		</form>
		{#if form?.success}
			<p class="variant-ghost-success rounded p-2 text-xl">Successfully made a post!</p>
		{/if}
		{#if form?.error}
			<p class="variant-ghost-error rounded font-bold p-2 text-xl">Failed to create a post.</p>
		{/if}
	</div>
{/if}
