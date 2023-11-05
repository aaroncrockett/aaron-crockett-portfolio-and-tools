<script lang="ts">
	import Swatch from './(partials)/Swatch.svelte';
	import ColorPicker from './(partials)/ColorPicker.svelte';
	import ControlsLead from './(partials)/ControlsLead.svelte';
	import ControlsTrail from './(partials)/ControlsTrail.svelte';
	// Svelte Related
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import type { Writable } from 'svelte/store';
	// Skelton Labs
	import { localStorageStore } from '@skeletonlabs/skeleton';
	// Other Types
	import type { ThemeOptionsCollection } from '$lib/types';

	const filteredSwatchColorClasses = [];

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
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'secondary',
					label: 'Secondary',
					hex: '#4F46E5',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: '300,500,700'
				},
				{
					key: 'tertiary',
					label: 'Tertiary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '300,500,700'
				},
				{
					key: 'quaternary',
					label: 'Quaternary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '300,500,700'
				},
				{
					key: 'quinary',
					label: 'Quinary',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '300,500,700'
				},
				{
					key: 'success',
					label: 'Success',
					hex: '#84cc16',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '300,500,700'
				},
				{
					key: 'warning',
					label: 'Warning',
					hex: '#EAB308',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '300,500,700'
				},
				{
					key: 'error',
					label: 'Error',
					hex: '#D41976',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: '300,500,700'
				},
				{
					key: 'info',
					label: 'Info',
					hex: '#D41976',
					rgb: '0 0 0',
					on: '255 255 255',
					stops: '300,500,700'
				},
				{
					key: 'neutral',
					label: 'Neutral',
					hex: '#0EA5E9',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
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

	function handleColorChange(event: CustomEvent) {
		color = event?.detail;
	}

	storeThemeOptions.subscribe(($storeThemeOptions) => {
		console.log($storeThemeOptions); // This will log whenever the store changes
	});

	function handleStopsChange(event: CustomEvent) {
		storeThemeOptions.update((currentOptions) => {
			return {
				...currentOptions,
				colors: currentOptions.colors.map((color, i) => {
					console.log(event.detail);
					if (i === event.detail.colorIndex) {
						return { ...color, stops: event.detail.stops };
					}
					console.log(color);
					return color;
				})
			};
		});
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div class="page-one-col" transition:fade={{ easing: cubicIn, duration: 600 }}>
		<h2 class="page-header">Color Generator</h2>
		<section>
			<ColorPicker {color} on:colorChange={handleColorChange} />
			<div class="p-4 grid grid-cols-1 gap-4">
				{#each $storeThemeOptions.colors as colorRow, i}
					<div
						class="grid grid-cols-1 lg:grid-cols-[160px_1fr_250px] gap-2 lg:gap-4 border-b-4 lg:border-b-0 border-surface-100 pb-6 lg:pb-0"
					>
						<ControlsLead label={colorRow.label} hex={colorRow.hex} />
						<Swatch color={colorRow.key} stops={colorRow.stops.split(',')} />
						<ControlsTrail
							colorOn={colorRow.on}
							stops={colorRow.stops}
							on:stopsChange={handleStopsChange}
							colorsIndex={i}
						/>
					</div>
				{/each}
			</div>
		</section>
	</div>
{/if}

<style lang="postcss">
</style>
