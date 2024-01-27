<script lang="ts">
	import paFSnew from '$lib/images/pa-sm-new-deisgn-2024.webp';
	import paFSnewSm from '$lib/images/pa-sm-new-design-2024-sm.webp';
	import appSupp from '$lib/images/app-sup-interface.webp';
	import appSuppSm from '$lib/images/app-sup-interface-sm.webp';
</script>

<section class="">
	<h4
		class="text-secondary-700 text-4xl leading-5xl md:text-6xl p-0 md:leading-8xl font-bold text-center"
	>
		Interface Design Examples
	</h4>
	<div class="space-y-4">
		<div class="flex flex-col gap-4 md:flex-row justify-center items-center">
			<picture>
				<source media="(max-width: 767px)" srcset={paFSnewSm} />
				<img
					src={paFSnew}
					class="border-4 rounded-md"
					alt="App Supervisor Interface."
					loading="lazy"
					width="450"
					height="800"
				/>
			</picture>
			<picture>
				<source media="(max-width: 767px)" srcset={appSuppSm} />
				<img
					src={appSupp}
					class="border-4 rounded-md"
					alt="App Supervisor Interface."
					loading="lazy"
					width="450"
					height="800"
				/>
			</picture>
		</div>
		<p class="italic text-center">
			Both designs done by me. Left: Design Mock-up for PA SM Interface. Right: Actual interface
			used in production in 2021.
		</p>
	</div>
</section>
