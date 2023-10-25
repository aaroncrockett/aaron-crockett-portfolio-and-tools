<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
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

	let coverHeadlineTwColor = 'text-primary-500';
	let headlines: string[] = [];

	$: floatingIconClasses = 'floatingSpan relative -bottom-1';
	$: {
		if ($hasScrolled) {
			coverHeadlineTwColor = 'text-surface-500';
			floatingIconClasses = 'relative -bottom-0';
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
			// Create headline line in chunks from headlinesBucket to animate in.
			const interval = setInterval(() => {
				if (index < headlinesBucket.length) {
					headlines = [...headlines, headlinesBucket[index]];
					index++;
				} else {
					headlinesTransitionsHaveEnded = true;
					clearInterval(interval);
				}
			}, 450);
		}, 400);
	});
</script>

<!-- Remove scroll bars with overflow-hidden until animations are finished to avoid layout shift -->
<div class="relative" style={`height: ${$innerHeight}px;`}>
	<!-- Transition background intro. -->
	{#if triggerOnMountAnimations}
		<div
			class="absolute inset-0 z-100 bg-surface-600"
			style={`height: ${$innerHeight}px;`}
			in:fly={{ y: '100%', easing: cubicOut }}
		/>
	{/if}
	<div class="container relative px-3 sm:px-2 pt-14 sm:pt-16 pb-12 mx-auto">
		<div class="flex flex-col overflow-hidden">
			{#each headlines as line}
				<h3
					class="font-bold uppercase text-surface-50 text-5xl leading-5xl sm:text-[10vw] sm:leading-[10vw] xl:text-9xl xl:leading-9xl"
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
				class="sm:pl-2 pl-1 xl:text-4xl xl:leading-4xl sm:text-[4vw] sm:leading-[4vw] text-2xl leading-3xl text-surface-50"
				in:fly={{
					x: '-100%',
					easing: cubicOut
				}}
			>
				Front-End Focus With Full-Stack Experience.
			</p>
		{/if}
	</div>

	<h4
		class="z-5 absolute flex w-full items-center bottom-0 right-0 left-0 bg-surface-50 text-primary-500 sm:text-3xl sm:leading-3xl text-2xl leading-2xl sm:pb-0"
	>
		<span
			class={classNames(
				triggerOnMountAnimations ? 'opacity-100' : 'opacity-0',
				coverHeadlineTwColor,
				'transition-all duration-600 container flex items-center mx-auto py-2'
			)}
		>
			<span class={floatingIconClasses}>{@html downIconSvg} </span> Portfolio & CV
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
