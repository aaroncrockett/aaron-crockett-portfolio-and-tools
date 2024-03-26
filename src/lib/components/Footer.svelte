<script>
	export let visible = false;
</script>

<div class={`${visible ? 'visible' : 'invisible'} bg-surface-500 mt-12 md:mt-16`}>
	<div class="p-2 container mx-auto flex justify-between">
		<div>
			<div class="sm:inline-block">
				<a href="/?return-home">
					<span class="text-primary-500">AARON</span>
					<span class="text-tertiary-500">CROCKETT</span> |
				</a>
			</div>
			<div class="sm:inline-block">
				<span class="text-white">WEB APPLICATION DEVELOPER</span>
			</div>
		</div>

		<div>
			<p class="text-gray-100 text-sm text-right">Created with SvelteKit & Tailwind</p>
			<p class="text-gray-100 text-sm text-right">Deployed to Vercel.</p>
		</div>
	</div>
</div>
