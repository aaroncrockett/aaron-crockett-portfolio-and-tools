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
	import {
		generateA11yOnColor,
		hexToTailwindRgbString,
		lighten,
		darken
	} from './skeleton-functions';
	// Other Libraries
	import chroma from 'chroma-js';
	// Types
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
	const hasGeneratedColors = writable(false);

	let triggerOnMountTransitions = false;
	let color = '#f00a0a';
	let hashErrorMessage = '';
	let cssOutput = '';

	setContext('colorSchemeStore', colorSchemeStore);
	setContext('colorsCollectionStore', colorsCollectionStore);

	$: if ($hasGeneratedColors) {
		// CSS output (for live preview)
		cssOutput = `
:root [data-theme='portfolio']{
	/* =~= Theme Properties =~= */

	/* =~= Theme On-X Colors =~= */
	--on-primary: ${$storeThemeOptions.colors[0]?.on};
	--on-secondary: ${$storeThemeOptions.colors[1]?.on};
	--on-tertiary: ${$storeThemeOptions.colors[2]?.on};
	--on-success: ${$storeThemeOptions.colors[3]?.on};
	--on-warning: ${$storeThemeOptions.colors[4]?.on};
	--on-error: ${$storeThemeOptions.colors[5]?.on};
	--on-surface: ${$storeThemeOptions.colors[6]?.on};
	/* =~= Theme Colors  =~= */
	${generateColorCSS()}
	}`;
	}

	$: livePreviewStylesheet = $hasGeneratedColors ? `\<style\>${cssOutput}\</style\>` : '';

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
				$colorsCollectionStore['primary'] = color;
				$colorsCollectionStore['secondary'] = baseColors[0];
				$colorsCollectionStore['tertiary'] = baseColors[1];
				break;
			default:
				baseColors = createTriadColors();
				baseColors = createTriadColors();
				$colorsCollectionStore['primary'] = color;
				$colorsCollectionStore['secondary'] = baseColors[0];
				$colorsCollectionStore['tertiary'] = baseColors[1];
		}
		colorsCollectionStore.set($colorsCollectionStore);
	}

	function createTriadColors() {
		const baseColor = chroma(color);
		const color2 = chroma(color).set('hsl.h', '+120');
		const color3 = baseColor.set('hsl.h', '-120');
		return [color2.hex(), color3.hex()];
	}

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

		$hasGeneratedColors = true;
	}

	function removeGeneratedCSS() {
		cssOutput = '';
		livePreviewStylesheet = '';
		hasGeneratedColors.set(false);
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

	function generatePalette(baseColor: string): any {
		const hexValidation = new RegExp(/^#[0-9a-f]{6}$/i);
		if (!hexValidation.test(baseColor)) baseColor = '#CCCCCC';

		const hex500 = `#${baseColor}`.replace('##', '#');

		const response: any = {
			500: { hex: hex500, rgb: hexToTailwindRgbString(hex500), on: generateA11yOnColor(hex500) }
		};

		const intensityMap: { [key: number]: number } = {
			50: 0.85,
			100: 0.8,
			200: 0.75,
			300: 0.6,
			400: 0.3,
			600: 0.9,
			700: 0.75,
			800: 0.6,
			900: 0.49
		};

		[50, 100, 200, 300, 400].forEach((level) => {
			const hex = lighten(baseColor, intensityMap[level]);
			response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
		});

		[600, 700, 800, 900].forEach((level) => {
			const hex = darken(baseColor, intensityMap[level]);
			response[level] = { hex, rgb: hexToTailwindRgbString(hex), on: generateA11yOnColor(hex) };
		});

		return response as any;
	}

	function generateColorCSS(): string {
		let newCSS = '';
		const newPalette: Record<string, any> = {};
		// Loop store colors
		$storeThemeOptions.colors.forEach((color: any, i: number) => {
			const colorKey = color.key;
			// Generate the new color palette hex/rgb/on values
			newPalette[color.key] = generatePalette($storeThemeOptions.colors[i].hex);
			// The color set comment
			newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */\n\t`;
			// CSS props for shade 50-900 per each color
			for (let [k, v] of Object.entries(newPalette[colorKey])) {
				newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
			}
		});
		return newCSS;
	}

	function createRandomColor() {
		color = chroma.random().hex();
	}

	function onKeyDown(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
			createRandomColor();
		}
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<svelte:window on:keydown={onKeyDown} />
<svelte:head>{@html livePreviewStylesheet}</svelte:head>

{#if triggerOnMountTransitions}
	<div class="page-one-col space-y-4" transition:fade={{ easing: cubicIn, duration: 600 }}>
		<section class="flex flex-col items-center gap-4">
			<h2 class="page-header text-center">Color Generator</h2>
			<p class="w-2/3 text-center">
				<span class="md:inline hidden"
					>Press Ctrl (or Windows Key) + space to generate a random color.
				</span>Enter a hex code or click to pick a hex code.
			</p>
			<button
				on:click={createRandomColor}
				class="md:hidden inline-block variant-ghost-secondary btn-sm btn">Random Color</button
			>
			<ColorPicker {color} on:colorChange={handlePrimaryColorChange} />
			<p class="text-error-500 text-xl">{hashErrorMessage}</p>
			<ChipOptions />
			<button class="btn variant-ghost-primary" on:click={handleColorGeneration}>Generate</button>

			<button class="btn variant-ghost-secondary" on:click={removeGeneratedCSS}>Remove</button>
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
