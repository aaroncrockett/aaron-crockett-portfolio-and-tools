<script lang="ts">
	import folioCg from '$lib/images/foliole-cg.webp';
	import folioHp from '$lib/images/foliole-hp.webp';
	import folioInterface from '$lib/images/foliole-interface.webp';
	import folioInterfaceSm from '$lib/images/foliole-interface.webp';
	//
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	//
	import { hasScrolled } from '$lib/store';

	export let returnHome = false;

	const inViewOptions = { rootMargin: '-50px', unobserveOnEnter: true };

	const dispatch = createEventDispatcher();

	// TODO: Refactor to use new inViewMounted helper! It has been implimented in AboutMe, Designs and Summary CV

	$: isImgsView = false;
	$: initView = $hasScrolled || returnHome;
	$: {
		if (isImgsView) {
			dispatch('inview-complete', { value: 'projectShowCases' });
		}
	}
</script>

<section>
	{#if initView}
		<h4
			in:fly={{ duration: 400, y: -20, delay: 250 }}
			class={`${
				initView ? 'opacity-100' : 'opacity-0'
			} display-header-small fade-in-view text-center md:text-left`}
		>
			Project ShowCases
		</h4>
	{/if}
	<div class="space-y-6">
		<div
			in:fly={{ duration: 400, y: -20, delay: 500 }}
			class={` ${initView ? 'opacity-100' : 'opacity-0'} fade-in-view `}
		>
			{#if initView}
				<h3 class="text-center display-header text-primary-600 md:text-left">
					Leaf UI: Library and Toolkit
				</h3>
				<h4
					use:inview={inViewOptions}
					on:inview_enter={(event) => {
						const { inView } = event.detail;
						initView = inView;
					}}
					class="text-center display-header md:text-left"
				>
					A Framework agnostic UI Toolkit.
				</h4>
			{/if}
		</div>

		<div
			class={`${
				initView ? 'opacity-100' : 'opacity-0'
			} project-showcases-anchor flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center fade-in-view`}
		>
			{#if initView}
				<picture
					in:fly={{ duration: 400, x: -100, delay: 520 }}
					class=" md:w-[calc(33.33%-.25rem)] flex-initial h-auto"
				>
					<source media="(max-width: 767px)" srcset={folioInterfaceSm} />
					<img
						src={folioInterface}
						class="w-full border-4 rounded-md"
						alt="Foliole UI - Interface."
						width="650"
						height="1200"
					/>
				</picture>
			{/if}
			{#if initView}
				<img
					src={folioHp}
					class="border-4 rounded-md md:block hidden md:w-[calc(33.33%-.25rem)] flex-initial h-auto"
					alt="Foliole UI - Home Page."
					width="900"
					height="492"
					in:fly={{ duration: 400, x: -100, delay: 560 }}
				/>
			{/if}
			{#if initView}
				<img
					src={folioCg}
					class={`fade-in-view border-4 rounded-md md:block hidden md:w-[calc(33.33%-.25rem)] flex-initial h-auto}`}
					alt="Foliole UI - Color Generator."
					width="1200"
					height="650"
					in:fly={{ duration: 400, x: -100, delay: 600 }}
				/>
			{/if}
		</div>
		{#if initView}
			<div
				use:inview={inViewOptions}
				on:inview_enter={(event) => {
					const { inView } = event.detail;
					isImgsView = inView;
				}}
				class="space-y-4 area-two-col lg:ml-[10%] lg:mr-[7.5%]"
			>
				{#if isImgsView}
					<div
						in:fly={{ duration: 400, x: 100, delay: 500 }}
						class={`${isImgsView ? 'opacity-100' : 'opacity-0'} space-y-4 mt-2`}
					>
						<h5 class="text-center display-header text-surface-800 md:text-left">
							Project Summary
						</h5>
						<p>
							If you don't know what a component library is and need a summary, <a
								class="inline-link"
								href="/blog/component-libraries">read this</a
							>.
						</p>
						<p>
							This project is in progress. The above images display an earlier design and project
							name. The code can be seen on github under "Leaf-UI". Live docs site coming soon. More
							details about this project coming.
						</p>

						<div class="flex flex-col space-y-2 !mb-6 !mt-6">
							<a href="https://github.com/aaroncrockett/leaf-ui" class="inline-link"
								>Leaf UI on github.</a
							>
						</div>
					</div>

					<div
						in:fly={{ duration: 400, x: -100, delay: 500 }}
						class={`${isImgsView ? 'opacity-100' : 'opacity-0'} card p-4`}
					>
						<p class="font-bold text-[18px] text-center">
							I am responsible for the project in its entirety, which includes:
						</p>
						<div>
							<ul class="hp-project-list">
								<li><span>👉</span> UI and visual experience.</li>
								<li><span>👉</span> Docs site in Next.js.</li>
								<li><span>👉</span> Tailwind Plugin.</li>
								<li>
									<span>👉</span> Node.js script to generate CSS (and the CSSinJS) for Tailwind and vanilla
									CSS purposes.
								</li>
								<li><span>👉</span> Theme Generator written in React.</li>
							</ul>
							<ul class="hp-project-list">
								<li><span>👉</span> React Components.</li>
								<li><span>👉</span> Vue Components.</li>
								<li><span>👉</span> Monorepo using pnpm.</li>
								<li><span>👉</span> Rules using Husky.</li>
								<li><span>👉</span> Deployment to Vercel.</li>
							</ul>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.section-p {
		@apply lg:w-2/3 sm:w-4/5 mx-auto text-center;
	}

	.foliole-logo {
		@apply flex self-center flex-shrink-0 border-[.175rem] rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg shadow-sm;
		border-color: rgb(112, 132, 146);
	}

	.foliole-logo-options {
		background: linear-gradient(45deg, rgb(164, 214, 255), rgb(138, 202, 253));
	}

	.foliole-logo-vertical {
		@apply flex-col w-7 h-7;
	}

	.foliole-logo-wrapper {
		@apply flex;
	}

	.foliole-logo-wrapper-options {
		@apply flex-row;
	}

	.foliole-logo-h1 {
		@apply font-bold whitespace-nowrap uppercase;
	}

	.foliole-logo-h1-horizontal {
		@apply text-2xl;
	}

	.foliole-logo-h1-vertical {
		@apply text-4xl;
	}

	.foliole-logo-text-ui {
		background: linear-gradient(45deg, rgb(141, 254, 238 / 1), rgb(138, 202, 253 / 1));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	ul.hp-project-list li {
		@apply leading-[32px] mb-1 text-[18px] text-secondary-900 font-bold;
	}
	ul.hp-project-list li span {
		@apply mr-1 text-[16px];
	}
</style>
