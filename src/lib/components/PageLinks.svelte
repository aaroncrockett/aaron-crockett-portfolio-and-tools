<script lang="ts">
	import { page } from '$app/stores';
	// UI Related
	import * as feather from 'feather-icons';

	export let showChevron = false;

	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#ffffff',
		width: 12,
		height: 12
	});
</script>

<a on:click class="!text-white p-1 sm:p-2 font-bold !text-xl sm:text-base" href="/blog">
	<span class="inline-flex items-center hover:!text-tertiary-500">
		{#if showChevron}
			<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
		{/if}
		<span class={`${$page?.route.id == '/blog' ? 'text-primary-500 ' : ''}`}>Blog</span></span
	>
</a>
<a on:click class="!text-white p-1 sm:p-2 font-bold !text-xl sm:text-base" href="/tools">
	<span class="inline-flex items-center hover:!text-tertiary-500">
		{#if showChevron}
			<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
		{/if}
		<span class={`${$page?.route.id == '/tools' ? 'text-primary-500 ' : ''}`}>Tools</span></span
	>
</a>
