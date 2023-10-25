<script>
	// UI Related
	import * as feather from 'feather-icons';

	export let showChevron = false;

	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#ffffff',
		width: 12,
		height: 12
	});
</script>

<a class="!text-white p-1 sm:p-2 font-bold !text-xl sm:text-base" href="/blog">
	<span class="inline-flex items-center hover:!text-tertiary-500">
		{#if showChevron}
			<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
		{/if}
		Blog</span
	>
</a>
