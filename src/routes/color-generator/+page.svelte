<script lang="ts">
	import Swatch from './(partials)/Swatch.svelte';
	import ColorPicker from './(partials)/ColorPicker.svelte';
	import ControlsLead from './(partials)/ControlsLead.svelte';
	import ControlsTrail from './(partials)/ControlsTrail.svelte';
	// Svelte Related
	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	// Skelton Labs
	import { localStorageStore } from '@skeletonlabs/skeleton';
	// Other Libraries
	import chroma from 'chroma-js';
	// Types
	import { additionalColorNames, colorSchemes } from '$lib/types';
	import type { ThemeOptionsCollection, ColorsCollection } from '$lib/types';
	import ChipOptions from './(partials)/ChipOptions.svelte';

	const storeThemeOptions: Writable<ThemeOptionsCollection> = localStorageStore(
		'storeThemeOptions',
		{
			colors: [
				{
					key: 'primary',
					label: 'Primary',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'secondary',
					label: 'Secondary',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'tertiary',
					label: 'Tertiary',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'quaternary',
					label: 'Quaternary',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'quinary',
					label: 'Quinary',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'neutral',
					label: 'Neutral',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'neutral-cool',
					label: 'Neutral Cool',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'neutral-warm',
					label: 'Neutral Warm',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'info',
					label: 'Info',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'success',
					label: 'Success',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'error',
					label: 'Error',
					hex: '',
					rgb: '0 0 0',
					on: '0 0 0',
					stops: '50,100,200,300,400,500,600,700,800,900'
				},
				{
					key: 'warning',
					label: 'Warning',
					hex: '',
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
	const colorsCollectionStore = writable<ColorsCollection>({
		primary: null,
		secondary: null,
		tertiary: null
	});
	const colorSchemeStore = writable('triad');

	let triggerOnMountTransitions = false;
	let color = '#ff0000';
	let hashErrorMessage = '';

	setContext('colorSchemeStore', colorSchemeStore);
	setContext('colorsCollectionStore', colorsCollectionStore);

	function handlePrimaryColorChange(event: CustomEvent) {
		if (event?.detail.charAt(0) !== '#') {
			hashErrorMessage = 'Invalid color format. Hex code must start with #.';
			return;
		}
		if (hashErrorMessage.length) hashErrorMessage = '';
		if (event?.detail.length === 7) {
			color = event?.detail;
		}
	}

	function createColorsCollection() {
		let baseColors = [];
		switch ($colorSchemeStore) {
			case 'triad':
				baseColors = createTriadColors();
				$colorsCollectionStore['primary'] = baseColors[0];
				$colorsCollectionStore['secondary'] = baseColors[1];
				$colorsCollectionStore['tertiary'] = baseColors[2];
				break;
			default:
				baseColors = createTriadColors();
				$colorsCollectionStore['primary'] = baseColors[0];
				$colorsCollectionStore['secondary'] = baseColors[1];
				$colorsCollectionStore['tertiary'] = baseColors[2];
		}
		colorsCollectionStore.set($colorsCollectionStore);
	}

	function createTriadColors() {
		return ['#cccccc', '#bbbbbb', '#dddddd'];
	}

	function createNeutralColor(colorType: string) {}

	function handleColorGeneration() {
		createColorsCollection();

		storeThemeOptions.update((currentOptions) => {
			return {
				...currentOptions,
				colors: currentOptions.colors.map((color, i) => {
					if ($colorsCollectionStore[color.key]) {
						if ($colorsCollectionStore[color.key] !== null) {
							color.hex = $colorsCollectionStore[color.key] as string;
						}
						return color;
					} else {
						return color;
					}
				})
			};
		});
	}

	function handleStopsChange(event: CustomEvent) {
		storeThemeOptions.update((currentOptions) => {
			return {
				...currentOptions,
				colors: currentOptions.colors.map((color, i) => {
					if (i === event.detail.colorIndex) {
						return { ...color, stops: event.detail.stops };
					}
					return color;
				})
			};
		});
	}

	function onKeyDown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
			color = chroma.random();
		}
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<svelte:window on:keydown={onKeyDown} />

{#if triggerOnMountTransitions}
	<div class="page-one-col space-y-4" transition:fade={{ easing: cubicIn, duration: 600 }}>
		<section class="flex flex-col items-center gap-4">
			<h2 class="page-header text-center">Color Generator</h2>
			<p class="w-2/3 text-center">
				Press Ctrl (or Windows Key) + space to generate a random color. Enter a hex code or click to
				pick a hex code.
			</p>

			<ColorPicker {color} on:colorChange={handlePrimaryColorChange} />
			<p class="text-error-500 text-xl">{hashErrorMessage}</p>
			<ChipOptions />
			<button class="btn variant-ghost-primary" on:click={handleColorGeneration}>Generate</button>
		</section>
		<section>
			<div class="grid grid-cols-1 gap-2 sm:gap-4">
				{#each $storeThemeOptions.colors.filter((colorRow) => colorRow.hex !== '') as colorRow, i}
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
