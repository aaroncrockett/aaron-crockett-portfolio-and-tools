<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut, cubicOut } from 'svelte/easing';
	// UI related
	import * as feather from 'feather-icons';
	// Other
	import classNames from 'classnames';

	const headlinesBucket = ['WEB', 'APPLICATION', 'DEVELOPER'];

	let headlinesTransitionsHaveEnded = false;
	let triggerOnMountAnimations = false;
	let headlines: string[] = [];

	let downIconSvg = feather.icons['chevrons-down'].toSvg({
		stroke: '#EF4953',
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
<div
	class={classNames(
		'relative h-screen',
		`${headlinesTransitionsHaveEnded ? 'overflow-auto' : 'overflow-hidden'}`
	)}
>
	<!-- Transition background intro. -->
	{#if triggerOnMountAnimations}
		<div
			class={`absolute inset-0 z-100 h-screen bg-surface-600`}
			in:fly={{ y: '100%', easing: cubicOut }}
		/>
	{/if}
	<div class="container relative p-2 py-12 mx-auto sm:pt-16">
		<div class="flex flex-col overflow-hidden">
			{#each headlines as line}
				<h3
					class="font-bold uppercase text-surface-50 text-6xl leading-6xl sm:text-[10vw] sm:leading-[10vw] xl:text-9xl xl:leading-9xl"
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
				class="sm:pl-2 pl-1 xl:text-4xl xl:leading-4xl sm:text-[4vw] sm:leading-[4vw] text-2xl leading-base-2xl text-surface-50"
				in:fly={{
					x: '-100%',
					easing: cubicOut
				}}
			>
				Front-End focus with Full-Stack experience.
			</p>
		{/if}
	</div>

	<h4
		class={`z-5 absolute flex w-full items-center bottom-0 right-0 left-0 bg-surface-50 text-primary-500 sm:text-3xl sm:leading-3xl text-2xl leading-2xl`}
	>
		<span
			class={`${
				triggerOnMountAnimations ? 'opacity-100' : 'opacity-0'
			} transition-all duration-600 container flex items-center p-4 mx-auto sm:py-4 sm:p-2`}
		>
			{@html downIconSvg} Interactive Curriculum Vitae</span
		>
	</h4>
</div>
