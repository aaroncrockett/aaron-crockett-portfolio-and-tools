<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	import { backOut, cubicOut } from 'svelte/easing';
	import { getContext } from 'svelte';
	import { hasScrolled } from '$lib/store';
	// UI related
	import * as feather from 'feather-icons';
	// Other
	import classNames from 'classnames';

	const headlinesBucket = ['WEB', 'APPLICATION', 'DEVELOPER'];
	const innerHeight = getContext('inner-height');

	let headlinesTransitionsHaveEnded = false;
	let triggerOnMountAnimations = false;

	let coverHeadlineTwColor = 'text-secondary-600';
	let headlines: string[] = [];

	const opacity = tweened(1, { duration: 400, easing: cubicOut });

	$: floatingIconClasses = 'floatingSpan relative -bottom-1 ';
	$: {
		if ($hasScrolled) {
			floatingIconClasses = 'relative -bottom-0';

			$opacity = 0;
		}
	}

	let downIconSvg = feather?.icons['chevrons-down']?.toSvg({
		stroke: '#231F20',
		width: 28,
		height: 28
	});

	onMount(() => {
		setTimeout(() => {
			triggerOnMountAnimations = true;
			let index = 0;
			setTimeout(() => {
				const interval = setInterval(() => {
					if (index < headlinesBucket.length) {
						headlines = [...headlines, headlinesBucket[index]];
						index++;
					} else {
						headlinesTransitionsHaveEnded = true;
						clearInterval(interval);
					}
				}, 350);
			}, 75);
		}, 750);
	});
	const starIconSvg = feather?.icons['star']?.toSvg({
		stroke: '#110F10',
		width: 50,
		height: 50
	});
	const starIconSvgSm = feather?.icons['star']?.toSvg({
		stroke: '#110F10',
		width: 36,
		height: 36
	});
	const starIconDataUrl = `url('data:image/svg+xml;base64,${btoa(starIconSvg)}')`;
	const starIconSmDataUrl = `url('data:image/svg+xml;base64,${btoa(starIconSvgSm)}')`;
</script>

<!-- Remove scroll bars with overflow-hidden until animations are finished to avoid layout shift -->
<div class="relative bg-primary-500 overflow-hidden" style={`height: ${$innerHeight}px;`}>
	<!-- Transition background intro. -->
	{#if triggerOnMountAnimations}
		<div
			class={` absolute inset-0 z-100 bg-surface-600 fade-in-view `}
			style={`height: ${$innerHeight}px;`}
			in:fly={{ y: '100%', easing: cubicOut }}
		/>
	{/if}
	<div class="flex flex-wrap absolute inset-0 z-1">
		<div
			class="flex flex-wrap absolute inset-0 z-1 opacity-[.05] hidden md:block"
			style={`background-image: ${starIconDataUrl}; background-repeat: repeat;`}
		/>
		<div
			class="flex flex-wrap absolute inset-0 z-1 opacity-[.05] md:hidden"
			style={`background-image: ${starIconSmDataUrl}; background-repeat: repeat;`}
		/>
	</div>
	<div class="container relative px-3 sm:px-2 pt-20 sm:pt-16 pb-12 mx-auto z-1">
		<div class="flex flex-col overflow-hidden">
			{#each headlines as line}
				<h3
					class="font-bold uppercase text-surface-50 text-5xl leading-5xl sm:text-[8vw] sm:leading-[9vw] xl:text-8xl xl:leading-7xl"
					in:fly={{
						y: 150,
						easing: backOut
					}}
				>
					{line}
				</h3>
			{/each}
		</div>
		{#if headlinesTransitionsHaveEnded}
			<p
				class=" text-5xl leading-5xl sm:text-[8vw] sm:leading-[9vw] xl:text-8xl xl:leading-7xl uppercase text-surface-50"
				in:fly={{
					x: '-100%',
					easing: cubicOut
				}}
			>
				PORTFOLIO.
			</p>
		{/if}
	</div>

	<h4
		class="z-5 absolute flex w-full items-center bottom-0 right-0 left-0 bg-surface-50 text-tertiary-300 sm:text-3xl sm:leading-3xl text-xl leading-xl sm:pb-0"
	>
		<span
			style="opacity: {$opacity}"
			class={classNames(
				coverHeadlineTwColor,
				'duration-200 container flex items-center mx-auto py-2'
			)}
		>
			<span class={floatingIconClasses}>{@html downIconSvg}</span> Portfolio, CV & More.
		</span>
	</h4>
</div>

<style>
	@keyframes floatEffect {
		0%,
		100% {
			transform: translateY(15);
		}
		50% {
			transform: translateY(-5px);
		}
	}
	.floatingSpan {
		animation: floatEffect 3.2s infinite ease-in-out;
	}
</style>
