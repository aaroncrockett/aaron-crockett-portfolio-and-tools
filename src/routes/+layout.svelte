<script lang="ts">
	// local
	import '../app.postcss';
	//
	import Header from '$lib/components/Header.svelte';
	import SocialMediaLinks from '$lib/components/SocialMediaLinks.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';

	// Svelte & Sveltekit
	import { setContext, type ComponentEvents } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	// Skeleton Labs
	import { AppShell, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	// Stores and Libs
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { hasScrolled } from '$lib/store';
	// UI related
	import * as feather from 'feather-icons';

	export let data: PageData;

	initializeStores();

	const drawerSettings: DrawerSettings = {
		id: 'main-menu',
		// Provide your property overrides:
		bgDrawer: 'bg-surface-500 text-text-primary-500',
		bgBackdrop: 'bg-gradient-to-tr from-secondary-900/80 to-surface-900/80',
		width: 'w-[80%] md:w-[60%]',
		rounded: 'rounded-xl'
	};

	const drawerStore = getDrawerStore();

	const innerHeightStore = writable(0);

	const homeIconSvg = feather.icons['home'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const homeIconSvgSm = feather.icons['home'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});

	let appBarWrapperElBg = '';
	let innerWidth = 0;
	let isSmallScreen = false;

	$: innerHeight = 0;

	$: routeId = data.route.id;

	$: {
		if (innerHeight > 0) {
			$innerHeightStore = innerHeight;
		}
		if (innerWidth < 760) {
			isSmallScreen = true;
		} else {
			isSmallScreen = false;
			drawerStore.close();
		}
	}

	// innerHeight as opposed to vh/screen for mobile, to account for mobile bars at bottom.
	setContext('inner-height', innerHeightStore);

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// wait to add bg color as it looks better to have no bg on intro animation.
		if (event.currentTarget.scrollTop > 15) {
			if (!$hasScrolled) $hasScrolled = true;
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<!-- App Shell -->
<div style={`height: ${innerHeight}px;`}>
	{#if routeId == '/' || isSmallScreen}
		<Drawer>
			<div class="flex">
				<div class="flex flex-col gap-2 p-2">
					<a on:click={() => drawerStore.close()} class="inline-block p-1 sm:p-2" href="/">
						<span class="hidden sm:inline-block">
							{@html homeIconSvg}
						</span>
						<span class=" inline-block sm:hidden">
							{@html homeIconSvgSm}
						</span>
					</a>
					<SocialMediaLinks on:click={() => drawerStore.close()} />
				</div>
				<div class="flex bg-surface-300 p-2 w-full">
					<PageLinks on:click={() => drawerStore.close()} />
				</div>
			</div>
		</Drawer>
	{/if}

	<AppShell on:scroll={scrollHandler}>
		<svelte:fragment slot="header">
			<Header
				on:openMenu={() => drawerStore.open(drawerSettings)}
				{appBarWrapperElBg}
				{isSmallScreen}
				{routeId}
			/>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
		<svelte:fragment slot="pageFooter">
			<div class="bg-surface-500">
				<div class="p-2 container mx-auto">
					<div class="sm:inline-block">
						<a href="/">
							<span class="text-primary-500">AARON</span>
							<span class="text-tertiary-500">CROCKETT</span> |
						</a>
					</div>
					<div class="sm:inline-block">
						<span class="text-white">WEB APPLICATION DEVELOPER</span>
					</div>
				</div>
			</div>
		</svelte:fragment>
	</AppShell>
</div>
