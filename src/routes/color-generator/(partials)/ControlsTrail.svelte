<script lang="ts">
	import { inputSettings } from '../settings';
	import type { ColorSettings } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleStopChange(event: ChangeEvent<HTMLSelectElement>) {
		const details = { colorIndex: colorsIndex, stops: event?.target?.value };
		dispatch('stopsChange', details);
	}

	export let stops: string;
	export let colorOn: string;
	export let colorsIndex: number;
</script>

<div class="flex gap-2">
	<label class="label flex-1">
		<span>Color Stops</span>
		<select class="input" on:change={handleStopChange} bind:value={stops}>
			{#each inputSettings.stops as s}<option value={s.value}>{s.label}</option>{/each}
		</select>
	</label>
	<label class="label flex-1">
		<span>Text Color</span>
		<select class="input" bind:value={colorOn}>
			{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option>{/each}
		</select>
	</label>
</div>

<style lang="postcss">
</style>
