<script lang="ts">
	import DrawerMenuContents from './../lib/components/DrawerMenuContents.svelte';
	// local
	import '../app.postcss';
	//
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Svelte & Sveltekit
	import type { AfterNavigate } from '@sveltejs/kit';
	import { setContext, onMount, type ComponentEvents } from 'svelte';
	import { writable } from 'svelte/store';
	import { afterNavigate, invalidate } from '$app/navigation';
	import { page } from '$app/stores';

	// Skeleton Labs
	import { AppShell, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	// Stores and Libs
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { hasScrolled } from '$lib/store';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const sessionId = writable(session?.user?.id);

	$: {
		setContext('session-id', sessionId);
	}

	initializeStores();

	const drawerSettings: DrawerSettings = {
		id: 'main-menu',
		// Provide your property overrides:
		bgDrawer: 'bg-surface-500 text-text-primary-500',
		bgBackdrop: 'bg-gradient-to-tr from-secondary-900/80 to-surface-900/80',
		width: 'w-[80%] md:w-[60%]',
		rounded: 'rounded-xl'
	};

	const drawerStore: DrawerStore = getDrawerStore();
	const innerHeightStore = writable(0);

	let appBarWrapperElBg = '';
	let innerWidth = 0;
	let isSmallScreen = false;

	// innerHeight as opposed to vh/screen for mobile, to account for mobile bars at bottom.
	setContext('inner-height', innerHeightStore);
	setContext('drawer-store', drawerStore);

	$: innerHeight = 0;

	$: {
		if (innerHeight > 0) {
			$innerHeightStore = innerHeight;
		}
		if (innerWidth < 640) {
			isSmallScreen = true;
		} else {
			isSmallScreen = false;
			drawerStore.close();
		}
	}

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// wait to add bg color as it looks better to have no bg on intro animation.
		if (event.currentTarget.scrollTop > 15) {
			if (!$hasScrolled) $hasScrolled = true;
			appBarWrapperElBg = 'shadow-sm';
		}
	}

	afterNavigate((params: AfterNavigate) => {
		const isNewPage: boolean = params.from?.route.id !== params.to?.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<!-- App Shell -->
<div style={`height: ${innerHeight}px;`}>
	{#if $page?.route.id == '/' || isSmallScreen}
		<Drawer>
			<DrawerMenuContents />
		</Drawer>
	{/if}

	<AppShell on:scroll={scrollHandler}>
		<svelte:fragment slot="header">
			<Header
				on:openMenu={() => drawerStore.open(drawerSettings)}
				{appBarWrapperElBg}
				{isSmallScreen}
			/>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
		<svelte:fragment slot="pageFooter">
			<Footer />
		</svelte:fragment>
	</AppShell>
</div>
