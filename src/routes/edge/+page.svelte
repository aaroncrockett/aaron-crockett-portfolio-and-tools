<script>
	// import Details from '$lib/Details.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="p-10 variant-outline-success">
	<h1><span>Hello from the edge!</span></h1>
	<!-- <Details city={data.city} ip={data.ip} /> -->
	{data.city}
</div>

<aside>aasdf</aside>
