<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function emitColorChange() {
		dispatch('colorChange', color);
	}

	export let color: string = '#0FBA81';
</script>

<div class="input flex p-2">
	<input type="color" class="input" bind:value={color} on:input={emitColorChange} />
	<input
		class="nested-input w-full border-0 mx-2 bg-transparent p-1"
		type="text"
		bind:value={color}
		on:input={emitColorChange}
	/>
</div>
