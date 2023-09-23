<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// Skeleton Labs
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	// Other
	import classNames from 'classnames';
	// UI related
	import * as feather from 'feather-icons';

	export let appBarWrapperElBg = '';
	export let routeId = '';

	const drawerStore = getDrawerStore();

	const gitIconSvg = feather.icons['github'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const linkedIconSvg = feather.icons['linkedin'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const gitIconSvgSm = feather.icons['github'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});

	const linkedIconSvgSm = feather.icons['linkedin'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});

	let triggerOnMountTransitions = false;

	$: wrapperClasses = classNames(
		'fixed top-0 right-0 left-0 ',
		`${appBarWrapperElBg}`,
		routeId != '/' && 'bg-surface-600'
	);

	function openDrawer() {
		const drawerSettings: DrawerSettings = {
			id: 'hidden-drawer',
			// Provide your property overrides:
			bgDrawer: 'bg-primary-500',
			width: 'w-1/2',
			rounded: 'rounded'
		};
		drawerStore.open(drawerSettings);
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 800 }} class={wrapperClasses}>
		<AppBar class="container mx-auto" background="bg-none sm:!p-2 !p-1 !px-4">
			<svelte:fragment slot="lead">
				<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
					<a href="/">
						<span class="text-primary-500">AARON</span>
						<span class="text-tertiary-500">HAPPE</span>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button on:click={openDrawer} class="uppercase text-surface-600"> HIHI </button>
				<a
					class="inline-block p-2 rounded-full"
					href="https://github.com/aaronmichaelhappe/"
					target="_blank"
					rel="noreferrer"
				>
					<span class="hidden sm:inline">
						{@html gitIconSvg}
					</span>
					<span class="inline sm:hidden">
						{@html gitIconSvgSm}
					</span>
				</a>
				<a
					class="font-bold text-white inline-block"
					href="https://www.linkedin.com/in/aaron-happe-4741176a/"
					target="_blank"
					rel="noreferrer"
				>
					<span class="hidden sm:inline">
						{@html linkedIconSvg}
					</span>
					<span class="inline sm:hidden">
						{@html linkedIconSvgSm}
					</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</div>
{/if}
