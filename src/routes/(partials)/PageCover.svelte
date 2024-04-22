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

	const opacity = tweened(1, { duration: 400, easing: cubicOut });

	let hideHl: boolean;

	let headlinesTransitionsHaveEnded = false;
	let triggerOnMountAnimations = false;

	let coverHeadlineTwColor = 'text-secondary-500';

	let headlines: string[] = [];

	$: hideHl = false;
	$: floatingIconClasses = 'floatingSpan relative -bottom-1 ';
	$: {
		if ($hasScrolled && !hideHl) {
			floatingIconClasses = 'relative -bottom-0';
			$opacity = 0;
			setTimeout(() => {
				hideHl = true;
			}, 600);
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
				}, 400);
			}, 75);
		}, 500);
	});
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

	<div class="container relative px-3 sm:px-2 mx-auto z-1">
		<div class="flex flex-col overflow-hidden relative">
			<div class="absolute z-10">
				{#each headlines as line}
					<h3
						class="font-bold uppercase text-surface-50 text-[8.75vw] leading-[11vw] md:leading-[10vw] lg:leading-[8.75vw]"
						in:fly={{
							y: 150,
							easing: backOut
						}}
					>
						{line}
					</h3>
				{/each}
			</div>

			{#each headlinesBucket as line}
				<h3
					class=" font-bold uppercase text-secondary-800 opacity-50 text-[8.75vw] leading-[11vw] md:leading-[10vw] lg:leading-[8.75vw]"
				>
					{line}
				</h3>
			{/each}
		</div>
		{#if headlinesTransitionsHaveEnded}
			<p
				class=" font-bold text-[8.75vw] leading-[11vw] md:leading-[10vw] lg:leading-[8.75vw] uppercase text-surface-50"
				in:fly={{
					x: '-100%',
					easing: cubicOut
				}}
			>
				PORTFOLIO.
			</p>
		{/if}
	</div>
</div>
<h4
	class="z-5 absolute flex w-full items-center bottom-0 right-0 left-0 bg-surface-50 text-tertiary-500 sm:text-3xl sm:leading-3xl text-xl leading-xl sm:pb-0"
>
	<span
		style="opacity: {$opacity}"
		class={classNames(
			coverHeadlineTwColor,
			'duration-200 container flex items-center mx-auto py-2',
			hideHl ? 'hidden' : ''
		)}
	>
		<span class={floatingIconClasses}>{@html downIconSvg}</span> Portfolio, CV & More.
	</span>
</h4>

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
