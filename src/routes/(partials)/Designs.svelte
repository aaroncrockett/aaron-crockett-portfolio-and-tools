<script lang="ts">
	// Lib Assets
	import paFSnew from '$lib/images/pa-sm-new-deisgn-2024.webp';
	import paFSnewSm from '$lib/images/pa-sm-new-design-2024-sm.webp';
	import appSupp from '$lib/images/app-sup-interface.webp';
	import appSuppSm from '$lib/images/app-sup-interface-sm.webp';

	// Svelte related
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	//

	const inViewOptions = { rootMargin: '-50px', unobserveOnEnter: true };

	const dispatch = createEventDispatcher();

	$: isInView = false;

	$: {
		if (isInView) dispatch('inview-complete', { value: 'designs' });
	}

	$: mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section
	use:inview={inViewOptions}
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
	class="section-mini-chunk space-y-6"
>
	{#if mounted && isInView}
		<h3
			in:fly={{ duration: 400, y: -20, delay: 500 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			} display-header text-primary-600 text-center fade-in-view`}
		>
			Interface Design Examples
		</h3>

		<div
			in:fly={{ duration: 400, x: -200, delay: 700 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			} flex flex-col gap-4 md:flex-row justify-center items-center fade-in-view`}
		>
			<picture>
				<source media="(max-width: 767px)" srcset={paFSnewSm} />
				<img
					src={paFSnew}
					class="border-4 rounded-md"
					alt="App Supervisor Interface."
					loading="lazy"
					width="450"
					height="800"
				/>
			</picture>
			<picture>
				<source media="(max-width: 767px)" srcset={appSuppSm} />
				<img
					src={appSupp}
					class="border-4 rounded-md"
					alt="App Supervisor Interface."
					loading="lazy"
					width="450"
					height="800"
				/>
			</picture>
		</div>
		<p class={`${isInView ? 'opacity-100' : 'opacity-0'} italic text-center pt-2 fade-in-view`}>
			Both designs done by me. Left: Design Mock-up for PA SM Interface. Right: Actual interface
			used in production in 2021.
		</p>
	{/if}
</section>
