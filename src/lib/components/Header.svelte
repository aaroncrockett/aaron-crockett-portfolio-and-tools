<script lang="ts">
	import SocialMediaLinks from './SocialMediaLinks.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';

	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { getContext } from 'svelte';
	// Skeleton Labs
	import { AppBar } from '@skeletonlabs/skeleton';
	// Other
	import classNames from 'classnames';
	//
	import { page } from '$app/stores';
	// UI related
	import * as feather from 'feather-icons';
	export let appBarWrapperElBg = '';
	export let isSmallScreen: Boolean;

	let triggerOnMountTransitions = false;
	let loading = false;

	const menuOpenIconSvg = feather.icons['menu'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const menuOpenIconSvgSm = feather.icons['menu'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});

	const session = getContext('session');

	const dispatch = createEventDispatcher();

	$: isHome = $page?.route.id === '/';
	$: wrapperClasses = classNames(isHome ? 'fixed top-0 right-0 left-0' : '');

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div
		transition:fade={{ easing: cubicIn, duration: 800 }}
		class={`${wrapperClasses} ${appBarWrapperElBg} bg-surface-600 `}
	>
		<AppBar class="container mx-auto" padding="sm:p-2 p-1 px-4" background="bg-none">
			<svelte:fragment slot="lead">
				<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
					<a href="/">
						<span class="text-primary-500">AARON</span>
						<span class="text-tertiary-500">CROCKETT</span>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if session}
					<form method="post" action="?/signout">
						<button class="btn btn-sm font-bold variant-soft-primary" disabled={loading}
							>Sign Out</button
						>
					</form>
				{/if}
				<SocialMediaLinks />

				{#if isHome || isSmallScreen}
					<button class="inline-block p-1 sm:p-2" on:click={() => dispatch('openMenu')}>
						<span class="hidden sm:inline">
							{@html menuOpenIconSvg}
						</span>
						<span class="inline sm:hidden">
							{@html menuOpenIconSvgSm}
						</span>
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
		{#if !isHome && !isSmallScreen}
			<div class="variant-soft-secondary">
				<div class="container mx-auto py-1">
					<PageLinks />
				</div>
			</div>
		{/if}
	</div>
{/if}
