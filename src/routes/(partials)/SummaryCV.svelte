<script>
	// Summary CV
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
			<div class="flex flex-col w-full items-center p-4 card variant-glass">
				<div class="py-2">{@html starIconSvg}</div>
				<p class="text-center">
					Over 10 years of industry-related experience across a spectrum of team sizes and company
					scales including 5 years of experience working for a large fortune 1000 company.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col w-full items-center p-4 card variant-glass">
				<div class="py-2">{@html awardUpIconSvg}</div>
				<p class="text-center">
					Created highly engaging experiences for Famous Footwear, on notable brands including Nike
					and Converse. Won a company wide award for Converse Landing page.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col w-full items-center p-4 card variant-glass">
				<div class="py-2">{@html sendIconSvg}</div>
				<p class="text-center">
					Took charge of front-end development within a 3-person team, highlighting my autonomous
					capacity for delivery.
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col w-full items-center p-4 card variant-glass">
				<div class="py-2">{@html codeIconSvg}</div>
				<p class="text-center">
					Proactive, flexible, friendly, ambitious and creative. Versatile skill set that includes
					development and visual design. Contributed to open source and hackathons. Creating my own
					open source project. Teaching Experience.
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
