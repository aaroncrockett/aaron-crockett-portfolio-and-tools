<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// Skeleton Labs
	import { AppBar } from '@skeletonlabs/skeleton';
	import classNames from 'classnames';
	// UI related
	import * as feather from 'feather-icons';

	export let appBarWrapperElBg = '';
	export let routeId = '';

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
		routeId != '/' ? 'bg-surface-600' : `fixed top-0 right-0 left-0 ${appBarWrapperElBg}`
	);

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 800 }} class={wrapperClasses}>
		<AppBar class="container mx-auto" padding="sm:p-2 p-1 px-4" background="bg-none">
			<svelte:fragment slot="lead">
				<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
					<a href="/">
						<span class="text-primary-500">AARON</span>
						<span class="text-tertiary-500">CROCKETT</span>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="inline-block p-1 sm:p-2"
					href="https://github.com/aaroncrockett/"
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
					class="p-1 sm:p-2 inline-block"
					href="https://www.linkedin.com/in/aaron-happe-crockett-4741176a/"
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
