<script>
	// Summary CV

	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import * as feather from 'feather-icons';
	import { createEventDispatcher, onMount } from 'svelte';

	const starIconSvg = feather?.icons['star']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const sendIconSvg = feather?.icons['send']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const codeIconSvg = feather?.icons['code']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const awardUpIconSvg = feather?.icons['award']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	//
	const inViewOptions = { rootMargin: '-50px', unobserveOnEnter: true };

	const dispatch = createEventDispatcher();

	$: isInView = false;

	$: {
		if (isInView) dispatch('inview-complete', { value: 'summaryCV' });
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
	class="section-chunk"
>
	{#if mounted && isInView}
		<h4
			in:fly={{ duration: 400, y: -20, delay: 500 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			} display-header-small fade-in-view text-center md:text-left`}
		>
			CV & More.
		</h4>
		<h3
			in:fly={{ duration: 400, y: -20, delay: 500 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			}  display-header text-center md:ltext-left text-surface-600 md:!mb-8 !mb-4`}
		>
			CV Summary
		</h3>

		<div
			in:fly={{ duration: 400, x: -100, delay: 500 }}
			class={`${isInView ? 'opacity-100' : 'opacity-0'} grid sm:grid-cols-2 gap-2`}
		>
			<div class="box">
				<div class="flex flex-col w-full items-center p-4 card variant-glass">
					<div class="py-2">{@html starIconSvg}</div>
					<p class="text-center">
						<span class="font-bold">Over 10 years of industry-related experience</span> across a
						spectrum of team sizes and company scales including
						<span class="font-bold">5 years of experience working for a fortune 1000 company</span>.
					</p>
				</div>
			</div>
			<div class="box">
				<div class="flex flex-col w-full items-center p-4 card variant-glass">
					<div class="py-2">{@html awardUpIconSvg}</div>
					<p class="text-center">
						<span class="font-bold">During my 5 year tenure at Caleres,</span> I created highly
						engaging experiences for Famous Footwear, on notable brands including
						<span class="font-bold">Nike and Converse.</span> Won a company wide award for Converse Landing
						page.
					</p>
				</div>
			</div>
			<div class="box">
				<div class="flex flex-col w-full items-center p-4 card variant-glass">
					<div class="py-2">{@html sendIconSvg}</div>
					<p class="text-center">
						Took charge of front-end development at Power Admin,
						<span class="font-bold"
							>independently engineering the front end of web appplications and UIs for product
							development</span
						>.
					</p>
				</div>
			</div>
			<div class="box">
				<div class="flex flex-col w-full items-center p-4 card variant-glass">
					<div class="py-2">{@html codeIconSvg}</div>
					<p class="text-center">
						<span class="font-bold">Proactive, flexible, friendly and creative.</span> Versatile
						skill set that includes <span class="font-bold">development and visual design. </span> Self-taught
						developer, avid learner and creator. Masters Degree in the arts and teaching experience.
					</p>
				</div>
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	.box {
		@apply flex ring-0 p-1 card;
	}
</style>
