<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	import { backOut, cubicOut } from 'svelte/easing';
	import { getContext } from 'svelte';
	import { hasScrolled } from '$lib/store';
	// UI related
	import * as feather from 'feather-icons';
	// Other
	import classNames from 'classnames';

	import SocialMediaLinks from '../../lib/components/SocialMediaLinks.svelte';

	const headlinesBucket = [
		['<', 'Web-App', '/>'],
		['<', 'Engineer', '/>']
	];

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
		<div class="relative lg:w-[55%] md:pt-1 z-1">
			<div class="relative flex flex-col overflow-hidden">
				<div class="absolute z-10">
					{#each headlines as line, index}
						<h3
							class="uppercase text-5xl leading-5xl md:text-[7vw] md:leading-[7vw]"
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
						class="uppercase text-surface-900 opacity-90 text-5xl leading-5xl md:text-[7vw] md:leading-[7vw]"
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
					class="text-surface-900 opacity-90 text-5xl leading-5xl md:text-[7vw] md:leading-[7vw]"
					in:fly={{
						x: '-100%',
						easing: cubicOut
					}}
				>
					<span class="opacity-50 text-secondary-900 uppercase">&lt;</span><span
						class="italic font-normal text-secondary-500">Portfolio</span
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
					class="p-5 md:pt-6 max-w-[1080px]"
				>
					<p class="pb-4 text-2xl leading-2xl md:leading-3xl text-surface-100 md:text-3xl">
						Greetings!
					</p>

					<p class="pb-4 text-lg text-justify text-surface-100 leading-2x">
						With over a decade of industry experience, I've collaborated with teams of various
						sizes, honing my skills across a diverse spectrum—from design to front-end engineering
						and full stack development.
					</p>

					<!-- <p class="hidden pb-4 text-lg text-justify text-surface-100 leading-2x xl:block">
						I have created highly visible and engaging experiences for Famous Footwear, on notable
						brands including Nike and Converse where I showcased my ability to thrive in a Fortune
						1000 company, within large, diverse and dynamic teams. I have experience collaborating
						directly with a sole proprietor. Illustrating my autonomy through self-management, I was
						entrusted as the sole developer of UIs for new products on a small team. In addition, I
						Contributed to Full Stack development for the internal company catalog, demonstrating my
						ability to create continually integrated applications integral for daily company
						operations.
					</p> -->
					<p class="pb-4 text-lg text-justify text-surface-100 leading-2x">
						This portfolio serves as a gateway, offering a glimpse. Interested in learning more?
						Feel free to reach out via email to request my resume.
					</p>
					<!-- <p class="pb-4 text-lg text-justify text-surface-100 leading-2x md:w-3/5">
						<span class="font-bold">Primary Tech Expertise:</span> Next.js • React.js • React Query • Vue.js
						• Pinia • CSS • Tailwind CSS • Sass • REST • TypeScript • Figma • Git •Jest
					</p> -->
					<!-- <p class="pb-4 text-lg text-justify text-surface-100 leading-2x md:w-3/5">
						<span class="font-bold">Secondary Tech Expertise:</span> Cypress • Docker • Express.js • Firebase
						• GSAP • jQuery • Node.js • Npm • Pnpm • Svelte/SvelteKit • Storybook • SQL/ORMs • Vercel •
						Vite • Vuex • WordPress
					</p>
					<p class="pb-12 text-lg text-justify text-surface-100 leading-2x md:w-3/5">
						<span class="font-bold">Skills:</span> Front-End Development • Full Stack Development • Responsive
						Web Design • Cross Browser Compatibility • Project Management • Workflow Optimization • Version
						Control • Agile Development • Web Application Development • Cross-Functional Team Collaboration
						• Single Page Applications (SPA) • Server Side Render (SSR) • Hydration
					</p> -->
				</div>
			{/if}
		</div>
		<div
			class="lg:w-[45%] relative z-20 flex-col justify-center gap-4 pb-28 items-center opacity-50 lg:flex hidden"
		>
			<SocialMediaLinks hpLarge={true} />
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
		<span class={floatingIconClasses}>{@html downIconSvg}</span> Portfolio, CV & More.
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
