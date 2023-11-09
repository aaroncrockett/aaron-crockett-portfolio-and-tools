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
	const awardUpIconSvg = feather?.icons['award']?.toSvg({
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
				<div class="py-2">{@html awardUpIconSvg}</div>
				<p class="text-center">
					Developer for Caleres, a Fortune 1000 company. Created highly visible landing pages for
					Famous Footwear, on notable brands including Nike and Converse. Received company-wide
					award and recognition for this work.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html starIconSvg}</div>
				<p class="text-center">
					Increased productivity by developing intelligent tools on the job. Created a Vue component
					library for the company catalog and contributed to open-source projects. Currently
					creating my own UI component toolkit to be published on npm.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html sendIconSvg}</div>
				<p class="text-center">
					Led front-end development within a small, 3-person team (Power Admin), demonstrating
					flexibility and the ability to deliver autonomously.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col items-center p-4 card variant-glass">
				<div class="py-2">{@html codeIconSvg}</div>
				<p class="text-center">
					Demonstrated consistent technical progression. Evolved from design, to CSS/Layout/jQuery,
					to sole front-end developer of applications, and to full-stack contributions. Described as
					proactive, flexible, innovative and friendly.
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
