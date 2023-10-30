<script lang="ts">
	import dogsImg from '$lib/images/jasper-fred.png';
	import me from '$lib/images/me-smile.png';
</script>

<section class="page-section card">
	<div class="flex flex-col md:flex-row">
		<div class="w-full order-2 sm:order-1 flex md:w-1/2">
			<div class="w-[45%] hidden sm:block p-2">
				<!-- TODO optimize images - picture tag, smaller mobile images -->
				<img
					src={dogsImg}
					class="border-4 rounded-md"
					alt="My Dogs, Fred and Jasper. Jasper and Fred."
				/>
			</div>
			<div class="sm:max-w-[55%] w-full p-2">
				<!-- TODO optimize images - picture tag, smaller mobile images -->
				<img src={me} class="border-4 rounded-md" alt="Me. Aaron Crockett." />
			</div>
		</div>
		<div class="w-full p-2 flex flex-col gap-2 sm:order-2 md:w-1/2">
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
