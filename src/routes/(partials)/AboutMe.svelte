<script lang="ts">
	import dogsImg from '$lib/images/jasper-fred.webp';
	import dogsImgMd from '$lib/images/jasper-fred-md.webp';
	import dogsImgSm from '$lib/images/jasper-fred-sm.webp';
	import me from '$lib/images/me-smile.webp';
</script>

<section class="indented-content">
	<div class="flex flex-col gap-4 md:flex-row">
		<div class="w-full order-2 space-x-2 sm:order-1 flex md:w-1/2">
			<div class="w-[45%] hidden sm:block">
				<picture>
					<source media="(min-width: 768px)" srcset={dogsImgMd} />
					<source media="(max-width: 767px)" srcset={dogsImgSm} />
					<img
						src={dogsImg}
						class="border-4 rounded-md"
						alt="My Dogs, Fred and Jasper. Jasper and Fred."
						loading="lazy"
						width="901"
						height="900"
					/>
				</picture>
			</div>
			<div class="sm:max-w-[55%] w-full sm:block flex justify-center">
				<img
					src={me}
					class="border-4 rounded-md"
					alt="Me. Aaron Crockett."
					loading="lazy"
					width="446"
					height="490"
				/>
			</div>
		</div>
		<div class="w-full space-y-2 sm:order-2 md:w-1/2">
			<h3 class="text-primary-500">A little more about me.</h3>
			<p>
				I live in Portland, Oregon, with my husband Nick and our two dogs, Jasper and Fred. I enjoy
				hiking, game nights with friends, and exploring local restaurants. Every morning, I start my
				day by going for a jog either at the park or along the riverfront, followed by meditation,
				before I begin work.
			</p>
			<p>
				I have always had a passion for creating things. During my younger years, I enjoyed
				tinkering with webpages. I also pursued my interests in painting, participated in design
				contests, and even played in a couple of garage bands.
			</p>
		</div>
	</div>
</section>
