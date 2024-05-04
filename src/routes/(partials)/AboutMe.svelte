<script lang="ts">
	// Lib Assets
	import dogsImg from '$lib/images/jasper-fred.webp';
	import dogsImgMd from '$lib/images/jasper-fred-md.webp';
	import dogsImgSm from '$lib/images/jasper-fred-sm.webp';
	import me from '$lib/images/headshot-right.jpg';

	// Svelte related
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	const dispatch = createEventDispatcher();
	const inViewOptions = { rootMargin: '-50px', unobserveOnEnter: true };

	export let setInView = true;

	$: isInView = setInView;

	$: {
		if (isInView) dispatch('inview-complete', { value: 'aboutMe' });
	}

	$: mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="section-mini-chunk"
	use:inview={inViewOptions}
	on:inview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
>
	{#if mounted && isInView}
		<h3
			in:fly={{ duration: 400, y: -20, delay: 250 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			} display-header !text-primary-500 text-center !mb-4 md:text-left fade-in-view `}
		>
			A little more about me.
		</h3>
		<div
			in:fly={{ duration: 400, x: 200, delay: 700 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			}  flex flex-col gap-4 md:flex-row fade-in-view `}
		>
			<div class="flex order-2 w-full space-x-2 sm:order-1 md:w-1/2 mt-3 sm:mt-0">
				<div class="w-[45%] hidden sm:block">
					<picture>
						<source media="(min-width: 768px)" srcset={dogsImgMd} />
						<source media="(max-width: 767px)" srcset={dogsImgSm} />
						<img
							loading="lazy"
							src={dogsImg}
							class="border-4 rounded-md"
							alt="My Dogs, Fred and Jasper. Jasper and Fred."
							width="901"
							height="900"
						/>
					</picture>
				</div>
				<div class="sm:max-w-[55%] w-full sm:block flex justify-center">
					<img
						loading="lazy"
						src={me}
						class="border-4 rounded-md"
						alt="Aaron Crockett."
						width="446"
						height="490"
					/>
				</div>
			</div>
			<div class="w-full space-y-2 sm:order-2 md:w-1/2">
				<p>
					I live in Portland, Oregon, with my husband Nick and my dog, Jasper and Fred. Outside of
					creating and engineering, I enjoy hiking, game nights with friends, and exploring local
					restaurants. Every morning, I start my day by going for a jog either at the park or along
					the riverfront, followed by meditation, before I begin work.
				</p>
				<p>
					I have always had a passion for creating things. Earlier in life I pursued my interests in
					painting, participated in design contests, and even played in a couple of garage bands.
				</p>
			</div>
		</div>
	{/if}
</section>
