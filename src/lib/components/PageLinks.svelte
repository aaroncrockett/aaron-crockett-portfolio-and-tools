<script lang="ts">
	import { getContext } from 'svelte';
	import { page } from '$app/stores';
	import type { Writable } from 'svelte/store';

	// UI Related
	import * as feather from 'feather-icons';

	export let showChevron = false;

	const sessionId = getContext<Writable<string>>('session-id');
	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#ffffff',
		width: 12,
		height: 12
	});
</script>

{#if $sessionId}
	<a on:click class="page-link" href="/account">
		<span class="inline-flex items-center hover:!text-secondary-500">
			{#if showChevron}
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
			{/if}
			<span class={`${$page?.route.id == '/account' ? 'text-white ' : ''}`}>Account</span></span
		>
	</a>
	<!-- <a on:click class="page-link" href="/post-maker">
		<span class="inline-flex items-center hover:!text-tertiary-500">
			{#if showChevron}
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
			{/if}
			<span class={`${$page?.route.id == '/post-maker' ? 'text-white ' : ''}`}
				>Post Maker</span
			></span
		>
	</a> -->
{/if}
{#if !$sessionId}
	<!-- <a on:click class="page-link" href="/sign-in">
		<span class="inline-flex items-center hover:!text-tertiary-500">
			{#if showChevron}
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
			{/if}
			<span class={`${$page?.route.id == '/sign-in' ? 'text-white ' : ''}`}>Sign In</span
			></span
		>
	</a> -->
{/if}
<a on:click class="page-link text-secondary" href="/color-generator">
	<span class="inline-flex items-center hover:!text-white">
		{#if showChevron}
			<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
		{/if}
		<span class={`${$page?.route.id == '/color-generator' ? 'white ' : ''}`}>Color Generator</span
		></span
	>
</a>
<a on:click class="page-link" href="/blog">
	<span class="inline-flex items-center hover:!text-white">
		{#if showChevron}
			<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
		{/if}
		<span class={`${$page?.route.id == '/blog' ? '' : ''}`}>Blog</span></span
	>
</a>

<style lang="postcss">
	.page-link {
		@apply !text-white p-1 mr-1 font-bold sm:text-base uppercase;
	}
</style>
