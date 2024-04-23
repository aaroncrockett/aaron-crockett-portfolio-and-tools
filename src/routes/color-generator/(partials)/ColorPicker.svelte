<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function emitColorChange() {
		dispatch('colorChange', color);
	}

	export let color: string = '#0FBA81';
</script>

<div class="flex w-2/3 p-1 shadow-lg input">
	<input type="color" class="flex-none input" bind:value={color} on:input={emitColorChange} />
	<input
		class="w-full p-1 mx-2 bg-transparent border-0 nested-input"
		type="text"
		bind:value={color}
		on:input={emitColorChange}
	/>
</div>
