<script>
	import * as feather from 'feather-icons';
	const bagIconSvg = feather.icons['shopping-bag'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const lockIconSvg = feather.icons['lock'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const awardIconSvg = feather.icons['award'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const bookIconSvg = feather.icons['book-open'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
</script>

<section class="p-4 container mx-auto variant-soft-surface card">
	<h3
		class="uppercase font-bold text-2xl sm:text-3xl sm:leading-3xl leading-3xl text-center pb-6 pt-1 rounded"
	>
		CV Summary
	</h3>

	<div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html bagIconSvg}</div>
				<p class="text-center">
					Developer on Famous Footwear for Caleres, a Fortune 1000 company. Developed custom and
					highly visible landing pages for notable brands including Nike and Converse.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html lockIconSvg}</div>
				<p class="text-center">
					Sole front-end developer for a small 3 person team (Power Admin) which relied upon me to
					create UIs for server monitoring software.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html awardIconSvg}</div>
				<p class="text-center">
					Proactively contributes to innovative solutions and practical improvements. Delivers
					consistent, high-quality results. Keeps current and actively creates and maintains
					personal projects.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html bookIconSvg}</div>
				<p class="text-center">
					Demonstrated consistent technical progression. Evolved from design, to CSS/Layout/jQuery,
					to sole front-end developer of applications, and to full-stack contributions.
				</p>
			</div>
		</div>
	</div>
</section>
