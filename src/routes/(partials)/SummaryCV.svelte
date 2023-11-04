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
	const thumbsUpIconSvg = feather?.icons['thumbs-up']?.toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
</script>

<section class="page-section">
	<h3 class="text-center uppercase">CV Summary</h3>

	<div class="grid sm:grid-cols-2 gap-4 sm:gap-8">
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html starIconSvg}</div>
				<p class="text-center">
					Developer for Caleres, a Fortune 1000 company. Created highly visible landing pages for
					Famous Footwear, on notable brands including Nike and Converse. Received company side
					award and recognition for this work.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html thumbsUpIconSvg}</div>
				<p class="text-center">
					Proactive developer excelling beyond assigned duties. Examples include enhancing workplace
					productivity by developing innovative tools, and creating a component library in Vue.
					Additionally contributed to open-source projects outside of work.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html sendIconSvg}</div>
				<p class="text-center">
					Took charge of front-end development within a compact 3-person team (Power Admin),
					highlighting my flexibility and autonomous capacity for delivery.
				</p>
			</div>
		</div>
		<div class="box">
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

<style lang="postcss">
	.box {
		@apply flex ring-0 p-1 variant-ghost-surface card;
	}
</style>
