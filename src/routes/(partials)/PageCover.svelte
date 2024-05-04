<script lang="ts">
	// Svelte
	import { getContext, onMount } from 'svelte';
	// Transitions
	import { fade, fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { backOut, cubicOut } from 'svelte/easing';
	// Stores
	import { hasScrolled } from '$lib/store';
	// UI related
	import * as feather from 'feather-icons';
	// Other
	import classNames from 'classnames';
	// Components
	import SocialMediaLinks from '../../lib/components/SocialMediaLinks.svelte';

	const headlinesBucket = [['<', 'Web-App', '/>']];

	const innerHeight = getContext('inner-height');

	const opacity = tweened(1, { duration: 400, easing: cubicOut });

	let hideHl: boolean;

	let headlinesTransitionsHaveEnded = false;
	let triggerOnMountAnimations = false;

	let coverHeadlineTwColor = 'text-secondary-700';

	let headlines: string[][] = [];

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

	function handleScrollTo() {
		// const elemPage = document.querySelector('#page');

		$hasScrolled = true;

		hideHl = true;

		setTimeout(() => {
			const elemPage = document.querySelector('#page');

			elemPage.scrollTo({
				top: document.body.scrollHeight,

				behavior: 'smooth'
			});
		}, 50);
	}
</script>

<!-- Remove scroll bars with overflow-hidden until animations are finished to avoid layout shift -->
<div class="relative bg-secondary-900" style={`height: ${$innerHeight}px;`}>
	<!-- Transition background intro. -->
	{#if triggerOnMountAnimations}
		<div
			class={` absolute inset-0 z-100 bg-surface-600 fade-in-view `}
			style={`height: ${$innerHeight}px;`}
			in:fly={{ y: '100%', easing: cubicOut }}
		/>
	{/if}

	<div
		class="flex flex-col lg:flex-row gap-2 pt-2 px-3 lg:container mx-auto h-full md:space-between"
	>
		<div class="relative lg:w-2/3 md:pt-1 z-1">
			<div class="relative flex flex-col overflow-hidden">
				<div class="absolute z-10">
					{#each headlines as line, index}
						<h3
							class="uppercase text-6xl leading-5xl pt-4 md:leading-7xl md:pt-8 md:text-8xl xl:pt-12 xl:leading-8xl xl:text-9xl"
							in:fly={{
								y: 150,
								easing: backOut
							}}
						>
							<span class="opacity-0">{line[0]}</span><span class="text-white">{line[1]}</span><span
								class="opacity-0">{line[2]}</span
							>
						</h3>
					{/each}
				</div>

				{#each headlinesBucket as line, index}
					<h3
						class="uppercase text-surface-900 opacity-90 text-6xl pt-4 leading-5xl md:pt-8 md:leading-7xl md:text-8xl xl:pt-12 xl:leading-8xl xl:text-9xl"
					>
						<span class="opacity-50 text-secondary-900">{line[0]}</span><span
							class="opacity-50 text-secondary-900">{line[1]}</span
						><span class="opacity-50 text-secondary-900">{line[2]}</span>
					</h3>
				{/each}
			</div>
			{#if headlinesTransitionsHaveEnded}
				<button
					on:click={handleScrollTo}
					class="text-surface-900 opacity-90 text-6xl leading-5xl md:leading-7xl md:text-8xl xl:leading-8xl xl:text-9xl"
					in:fly={{
						x: '-100%',
						easing: cubicOut
					}}
				>
					<span class="opacity-50 text-secondary-900 uppercase">&lt;</span><span
						class="italic font-normal text-secondary-600">Engineering</span
					><span class="opacity-50 text-secondary-900 uppercase">/&gt;</span>
				</button>
			{/if}
			{#if headlinesTransitionsHaveEnded}
				<div
					in:fly={{
						x: '-100%',
						easing: cubicOut,
						duration: 800
					}}
					class="p-5 md:pt-5 pt-6 lg:pt-5 max-w-[1080px]"
				>
					<h4 class="pb-2 text-2xl leading-2xl md:leading-3xl text-white md:text-3xl">
						Greetings!
					</h4>

					<p class="text-white text-lg text-justify leading-2x lg:w-3/4 w-full sm:w-4/5 md:3/5">
						With over 12 years of industry experience, I've collaborated with teams of various
						sizes, honing my skills across a diverse spectrum—from front end and full stack
						engineering to design. Feel free to reach out via email to request my resume or visit
						one of the social media links.
					</p>
					<!-- <p class="pb-2 text-2xl leading-2xl md:leading-3xl text-surface-100 md:text-3xl">
						Building modern applications that converge thoughtful user-centric design with the
						current technological landscape.
					</p>

					<button
						class="btn btn-lg variant-ghost-secondary text-center !text-white mx-auto mt-3 uppercase"
						>Free Consultation</button
					> -->
					<div class="md:hidden flex mt-3">
						<SocialMediaLinks />
					</div>
				</div>
			{/if}
		</div>
		<div
			class="lg:w-1/3 relative z-20 flex-col justify-center gap-4 pb-28 items-center xl:items-start opacity-50 lg:flex hidden"
		>
			<div class="hidden md:flex flex-col">
				<SocialMediaLinks hpLarge={true} />
			</div>
		</div>
	</div>
</div>

<button
	on:click={handleScrollTo}
	class={` ${
		hideHl ? 'hidden' : ''
	} overflow-hidden z-5 absolute flex w-full items-center justify-center bottom-0 right-0 left-0 bg-surface-50 text-secondary-700 sm:text-3xl sm:leading-3xl text-xl leading-xl sm:pb-0`}
>
	<div
		style="opacity: {$opacity}"
		class={classNames(
			coverHeadlineTwColor,
			'duration-200 container flex items-center mx-auto py-2 w-full text-center justify-center'
		)}
	>
		<span class={floatingIconClasses}>{@html downIconSvg}</span> Portfolio & More.
	</div>
</button>

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
