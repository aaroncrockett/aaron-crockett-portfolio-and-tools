<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	//
	import { additionalColorNames, colorSchemes } from '$lib/types';
	import type { ColorsCollection } from '$lib/types';

	const colorSchemeStore = getContext('colorSchemeStore') as Writable<string>;
	const colorsCollectionStore = getContext('colorsCollectionStore') as Writable<ColorsCollection>;

	function toggleOptionalColors(colorKey: string): void {
		if ($colorsCollectionStore[colorKey] !== undefined) {
			delete $colorsCollectionStore[colorKey];
		} else {
			$colorsCollectionStore[colorKey] = null;
		}
		colorsCollectionStore.set($colorsCollectionStore);
	}
	function chooseColorScheme(colorKey: string): void {
		$colorSchemeStore = colorKey;
		switch ($colorSchemeStore) {
			case 'triad':
				$colorsCollectionStore['primary'] = null;
				$colorsCollectionStore['secondary'] = null;
				$colorsCollectionStore['tertiary'] = null;
				break;
			default:
				$colorsCollectionStore['primary'] = null;
				$colorsCollectionStore['secondary'] = null;
				$colorsCollectionStore['tertiary'] = null;
		}
		colorsCollectionStore.set($colorsCollectionStore);
	}
</script>

<div class="space-y-1">
	<p class="text-center font-bold">Choose color scheme:</p>
	<div class="flex gap-2 flex-wrap justify-center">
		{#each colorSchemes as colorKey}
			<button
				class={`chip text-base ${
					$colorSchemeStore === colorKey ? 'variant-filled-secondary' : 'variant-ghost-secondary'
				}`}
				on:click={() => {
					chooseColorScheme(colorKey);
				}}
			>
				{colorKey}
			</button>
		{/each}
	</div>
</div>
<div class="space-y-1">
	<p class="text-center font-bold">Colors:</p>
	<div class="flex gap-2 flex-wrap justify-center">
		{#each Object.keys($colorsCollectionStore) as key}
			<span class="chip text-base variant-glass-surface">{key}</span>
		{/each}
	</div>
</div>
<div class="space-y-1">
	<p class="text-center font-bold">Choose optional additional colors:</p>
	<div class="flex gap-2 flex-wrap justify-center">
		{#each additionalColorNames as colorKey}
			<button
				class={`chip text-base ${
					$colorsCollectionStore[colorKey] || $colorsCollectionStore[colorKey] === null
						? 'variant-filled-secondary'
						: 'variant-ghost-secondary'
				}`}
				on:click={() => {
					toggleOptionalColors(colorKey);
				}}
			>
				{colorKey}
			</button>
		{/each}
	</div>
</div>
