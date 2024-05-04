<script>
	// Summary CV

	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import * as feather from 'feather-icons';
	import { createEventDispatcher, onMount } from 'svelte';

	const starIconSvg = feather?.icons['star']?.toSvg({
		stroke: '#EF4A53',
		width: 28,
		height: 28
	});
	const sendIconSvg = feather?.icons['send']?.toSvg({
		stroke: '#EF4A53',
		width: 28,
		height: 28
	});
	const codeIconSvg = feather?.icons['code']?.toSvg({
		stroke: '#EF4A53',
		width: 28,
		height: 28
	});
	const awardUpIconSvg = feather?.icons['award']?.toSvg({
		stroke: '#EF4A53',
		width: 28,
		height: 28
	});

	//
	const inViewOptions = { rootMargin: '-50px', unobserveOnEnter: true };

	const dispatch = createEventDispatcher();

	export let setInView = false;

	$: isInView = setInView;

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
			in:fly={{ duration: 400, y: -20, delay: 250 }}
			class={`${
				isInView ? 'opacity-100' : 'opacity-0'
			} display-header-small fade-in-view text-center md:text-left`}
		>
			Further details
		</h4>
		<div class="space-y-6">
			<h3
				in:fly={{ duration: 400, y: -20, delay: 250 }}
				class={`${
					isInView ? 'opacity-100' : 'opacity-0'
				}  display-header text-center !text-primary-500`}
			>
				CV Summary
			</h3>
			<div
				in:fly={{ duration: 400, x: -100, delay: 400 }}
				class={`${isInView ? 'opacity-100' : 'opacity-0'} grid sm:grid-cols-2 gap-2 fade-in-view`}
			>
				<div class="box">
					<div class="flex flex-col items-center w-full p-4 card variant-glass">
						<div class="py-2">{@html starIconSvg}</div>
						<p class="text-center">
							<span class="italic font-semibold">Over 12 years of industry-related experience</span>
							across a spectrum of team sizes and company scales including
							<span class="italic font-semibold"
								>5 years of experience working for a fortune 1000 company</span
							>.
						</p>
					</div>
				</div>
				<div class="box">
					<div class="flex flex-col items-center w-full p-4 card variant-glass">
						<div class="py-2">{@html awardUpIconSvg}</div>
						<p class="text-center">
							<span class="italic font-semibold">During my 5 year tenure at Caleres,</span> I
							created highly engaging experiences for Famous Footwear, on notable brands including
							<span class="italic font-semibold">Nike and Converse.</span> Won a company wide award for
							Converse Landing page.
						</p>
					</div>
				</div>
				<div class="box">
					<div class="flex flex-col items-center w-full p-4 card variant-glass">
						<div class="py-2">{@html sendIconSvg}</div>
						<p class="text-center">
							<span class="italic font-semibold">Power Admin:</span> Created web applications, web
							sites, and interfaces. Self-managed where I worked directly with the sole
							proprietor/stakeholder,
							<span class="italic font-semibold"
								>showcasing my ability to independently engineer projects from start to finish.</span
							>
						</p>
					</div>
				</div>
				<div class="box">
					<div class="flex flex-col items-center w-full p-4 card variant-glass">
						<div class="py-2">{@html codeIconSvg}</div>
						<p class="text-center">
							<span class="italic font-semibold">Blackstone Publishing:</span> Contributed to full-stack
							development for the internal company catalog, showcasing my continuous integration and
							software maintenance skills for daily operational use.
						</p>
					</div>
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
