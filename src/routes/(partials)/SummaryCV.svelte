<script>
	import * as feather from 'feather-icons';

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
	const bookIconSvg = feather?.icons['book-open']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
</script>

<section class="page-section variant-soft-surface">
	<h3
		class="uppercase font-bold text-2xl sm:text-3xl sm:leading-3xl leading-3xl text-center pb-6 pt-1 rounded"
	>
		CV Summary
	</h3>

	<div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html starIconSvg}</div>
				<p class="text-center">
					Developer for Caleres, a Fortune 1000 company. Created highly visible landing pages for
					Famous Footwear, on notable brands including Nike and Converse.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html sendIconSvg}</div>
				<p class="text-center">
					Took charge of front-end development within a compact 3-person team (Power Admin),
					highlighting my flexibility and autonomous capacity for delivery.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html bookIconSvg}</div>
				<p class="text-center">
					Created UI component library for on-the-job company usage. Creating a component library
					for Vue and contributing to its associated Svelte open source counterpart.
				</p>
			</div>
		</div>
		<div class="flex ring-0 variant-ghost-surface p-1 card">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html codeIconSvg}</div>
				<p class="text-center">
					Demonstrated consistent technical progression. Evolved from design, to CSS/Layout/jQuery,
					to sole front-end developer of applications, and to full-stack contributions.
				</p>
			</div>
		</div>
	</div>
</section>
