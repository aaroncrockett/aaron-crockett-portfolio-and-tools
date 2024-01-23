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

	<div class="grid sm:grid-cols-2 gap-2">
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
					<span class="font-bold"
						>Took charge of front-end development within a 3-person team,
						<span class="font-bold"
							>independently engineering Web Apps and UIs for product development</span
						> highlighting my autonomous capacity for delivery.
					</span>
				</p>
			</div>
		</div>
		<div class="box">
			<div class="flex flex-col w-full items-center p-4 card variant-glass">
				<div class="py-2">{@html codeIconSvg}</div>
				<p class="text-center">
					<span class="font-bold">Proactive, flexible, friendly and creative.</span> Versatile skill
					set that includes <span class="font-bold">development and visual design. </span> Self-taught
					developer, avid learner and creator. Masters Degree in the arts and teaching experience.
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.box {
		@apply flex ring-0 p-1 card;
	}
</style>
