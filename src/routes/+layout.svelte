<script lang="ts">
	// local
	import '../app.postcss';
	// Components/Partials
	import Header from '$lib/components/Header.svelte';
	// Svelte
	import type { ComponentEvents } from 'svelte';
	// Skeleton Labs
	import { AppShell } from '@skeletonlabs/skeleton';
	// Store
	import { hasScrolled } from '$lib/store';

	let appBarWrapperElBg = '';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		if (!$hasScrolled) $hasScrolled = true;
		if (event.currentTarget.scrollTop > 10) {
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}
</script>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<Header {appBarWrapperElBg} />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
