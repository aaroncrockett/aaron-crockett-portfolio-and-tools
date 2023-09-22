<script lang="ts">
	// local
	import SignIn from '$lib/components/SignIn.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import '../app.postcss';
	// Components/Partials
	import Header from '$lib/components/Header.svelte';
	// Svelte
	import type { ComponentEvents } from 'svelte';
	// Skeleton Labs
	import { AppShell, Modal, initializeStores } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	// Store
	import { hasScrolled } from '$lib/store';

	initializeStores();

	const modalComponentRegistry: Record<string, ModalComponent> = {
		signIn: {
			ref: SignIn
		},
		signUp: {
			ref: SignUp
		}
	};

	let appBarWrapperElBg = '';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		if (!$hasScrolled) $hasScrolled = true;
		if (event.currentTarget.scrollTop > 10) {
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}
</script>

<Modal components={modalComponentRegistry} />
<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<Header {appBarWrapperElBg} />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
