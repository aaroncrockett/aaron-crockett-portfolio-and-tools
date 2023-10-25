<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	let triggerOnMountTransitions = false;
	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div class="page" transition:fade={{ easing: cubicIn, duration: 800 }}><p>example page</p></div>
{/if}
