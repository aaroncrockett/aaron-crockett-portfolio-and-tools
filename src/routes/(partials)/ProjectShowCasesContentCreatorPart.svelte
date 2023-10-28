<script lang="ts">
	import * as feather from 'feather-icons';

	const packageIconSvg = feather?.icons['package']?.toSvg({
		stroke: '#000000',
		width: 40,
		height: 40
	});
</script>

<div
	class="page-section border-t border-surface-400 mt-4 pt-2 w-full mx-auto gap-2 pb-2 flex flex-col justify-center"
>
	<h3 class="text-center uppercase text-primary-500">Content Creator</h3>
	<div class="mx-auto">{@html packageIconSvg}</div>
	<p class="text-center">project in progress.</p>
	<a class="inline-link text-center" href="/content-creator">Here.</a>
</div>
