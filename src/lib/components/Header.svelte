<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// Skeleton Labs
	import { AppBar } from '@skeletonlabs/skeleton';
	// Other
	import classNames from 'classnames';
	// UI related
	import * as feather from 'feather-icons';

	export let appBarWrapperElBg = '';

	let triggerOnMountTransitions = false;

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

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div
		transition:fade={{ easing: cubicIn, duration: 800 }}
		class={classNames('fixed top-0 right-0 left-0', `${appBarWrapperElBg}`)}
	>
		<AppBar class="container mx-auto" background="bg-none sm:!p-2 !p-1 !px-4">
			<svelte:fragment slot="lead">
				<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
					<span class="text-primary-500">AARON</span>
					<span class="text-tertiary-500">HAPPE</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
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
