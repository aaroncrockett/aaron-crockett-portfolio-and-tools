<script lang="ts">
	import Swatch from './(partials)/Swatch.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	// Skelton Labs
	import { localStorageStore } from '@skeletonlabs/skeleton';
	// Other Types
	import type { ThemeOptionsCollection, ColorSettings } from '$lib/types';
	import { inputSettings } from './settings';

	const filteredSwatchColorClasses = [];

	// Stores
	const storeThemeOptions: Writable<ThemeOptionsCollection> = localStorageStore(
		'storeThemeOptions',
		{
			colors: [
				{
					key: 'primary',
					label: 'Primary',
					hex: '#0FBA81',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
				},
				{
					key: 'secondary',
					label: 'Secondary',
					hex: '#4F46E5',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
				},
				{
					key: 'tertiary',
					label: 'Tertiary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
				},
				{
					key: 'quaternary',
					label: 'Quaternary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['300', '500', '700']
				},
				{
					key: 'quinary',
					label: 'Quinary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['300', '500', '700']
				},
				{
					key: 'success',
					label: 'Success',
					hex: '#84cc16',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['300', '500', '700']
				},
				{
					key: 'warning',
					label: 'Warning',
					hex: '#EAB308',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['300', '500', '700']
				},
				{
					key: 'error',
					label: 'Error',
					hex: '#D41976',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: ['300', '500', '700']
				},
				{
					key: 'info',
					label: 'Info',
					hex: '#D41976',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: ['300', '500', '700']
				},
				{
					key: 'neutral',
					label: 'Neutral',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
				}
			],
			fontBase: 'system',
			fontSecondary: 'system',
			textColorLight: '0 0 0',
			textColorDark: '255 255 255',
			roundedBase: '9999px',
			borderBase: '1px'
		}
	);

	let triggerOnMountTransitions = false;
	let color = '#ff0000';

	function handleColorChange(event: Event) {
		const input = event.target as HTMLInputElement;
		color = input.value;
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div class="page-one-col" transition:fade={{ easing: cubicIn, duration: 600 }}>
		<h2 class="page-header">Color Generator</h2>
		<section>
			<div class="input flex p-2">
				<input type="color" class="input" bind:value={color} on:input={handleColorChange} />
				<input
					class="nested-input w-full border-0 mx-2 bg-transparent p-1"
					type="text"
					bind:value={color}
					on:input={handleColorChange}
				/>
			</div>
			<div />
			<div class="p-4 grid grid-cols-1 gap-4">
				{#each $storeThemeOptions.colors as colorRow, i}
					<div class="grid grid-cols-1 lg:grid-cols-[160px_1fr_250px] gap-2 lg:gap-4">
						<label class="label">
							<span>{colorRow.label}</span>
							<div class="grid grid-cols-[auto_1fr] gap-4 place-items-end">
								<input class="input" type="color" bind:value={colorRow.hex} />
								<input class="input" type="text" bind:value={colorRow.hex} placeholder="#BADA55" />
							</div>
						</label>
						<Swatch color={colorRow.key} stops={colorRow.stops} />
						<div class="flex gap-4">
							<label>
								<span>Color Stops</span>
								<div class="input-group input-group-divider grid-cols-[1fr_auto]">
									<select>
										{#each inputSettings.stops as s}<option value={s.value}>{s.label}</option
											>{/each}
									</select>
								</div>
							</label>
							<label>
								<span>Text & Fill Color</span>
								<div class="input-group input-group-divider grid-cols-[1fr_auto]">
									<select bind:value={colorRow.on}>
										{#each inputSettings.colorProps as c}<option value={c.value}>{c.label}</option
											>{/each}
									</select>
								</div>
							</label>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>
{/if}

<style lang="postcss">
</style>
