<script>
	export let visible = false;
</script>

<div class={`${visible ? 'visible' : 'invisible'} bg-surface-500 mt-12 md:mt-16`}>
	<div class="lg:container flex justify-between p-5 mx-auto">
		<div>
			<div class="sm:inline-block">
				<a href="/?return-home">
					<span class="text-primary-500">Aaron</span>
					<span class="text-tertiary-500">Crockett</span> |
				</a>
			</div>
			<div class="sm:inline-block">
				<span class="text-white">Web Application Engineer</span>
			</div>
		</div>

		<div>
			<p class="text-sm text-right text-gray-100">Created with SvelteKit & Tailwind</p>
			<p class="text-sm text-right text-gray-100">Deployed to Vercel.</p>
		</div>
	</div>
</div>
