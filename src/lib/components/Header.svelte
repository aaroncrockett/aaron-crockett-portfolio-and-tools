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

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div
		transition:fade={{ easing: cubicIn, duration: 800 }}
		class={classNames('fixed top-0 right-0 left-0', `${appBarWrapperElBg}`)}
	>
		<AppBar class="container mx-auto" background="bg-none">
			<svelte:fragment slot="lead">
				<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
					<span class="text-primary-500">AARON</span>
					<span class="text-tertiary-500">HAPPE</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="hidden sm:inline-block p-2 rounded-full"
					href="https://github.com/aaronmichaelhappe/portolio-skeleton-ui"
					target="_blank"
					rel="noreferrer"
				>
					{@html gitIconSvg}
				</a>
				<a
					class="hidden font-bold text-white sm:inline-block"
					href="https://github.com/aaronmichaelhappe/portolio-skeleton-ui"
					target="_blank"
					rel="noreferrer"
				>
					{@html linkedIconSvg}
				</a>
			</svelte:fragment>
		</AppBar>
	</div>
{/if}
