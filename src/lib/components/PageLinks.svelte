<script lang="ts">
	import { getContext } from 'svelte';
	import { page } from '$app/stores';
	import type { Writable } from 'svelte/store';
	import ChevonRightSvg from '$lib/components/icons/ChevonRightSvg.svelte';

	export let showChevron = false;

	const sessionId = getContext<Writable<string>>('session-id');
</script>

{#if $sessionId}
	<a on:click class="page-link" href="/account">
		<span class="inline-flex items-center hover:!text-tertiary-500">
			{#if showChevron}
				<span class="pr-[.1rem]"><ChevonRightSvg /></span>
			{/if}
			<span class={`${$page?.route.id == '/account' ? 'text-primary-500 ' : ''}`}>Account</span
			></span
		>
	</a>
{/if}

<a on:click class="page-link" href="/color-generator">
	<span class="inline-flex items-center hover:!text-tertiary-500">
		{#if showChevron}
			<span class="pr-[.1rem]"><ChevonRightSvg /></span>
		{/if}
		<span class={`${$page?.route.id == '/color-generator' ? 'text-primary-500 ' : ''}`}
			>Color Generator</span
		></span
	>
</a>
<a on:click class="page-link" href="/blog">
	<span class="inline-flex items-center hover:!text-tertiary-500">
		{#if showChevron}
			<span class="pr-[.1rem]"><ChevonRightSvg /></span>
		{/if}
		<span class={`${$page?.route.id == '/blog' ? 'text-primary-500 ' : ''}`}>Blog</span></span
	>
</a>

<style lang="postcss">
	.page-link {
		@apply !text-white p-1 mr-1 font-bold sm:text-base uppercase;
	}
</style>
