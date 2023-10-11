<script lang="ts">
	// local
	import '../app.postcss';
	import SignIn from '$lib/components/SignIn.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Header from '$lib/components/Header.svelte';
	// Svelte & Sveltekit
	import type { ComponentEvents } from 'svelte';
	import type { PageData } from './$types';
	// Skeleton Labs
	import { AppShell, Modal, initializeStores } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	// Stores and Libs
	import { hasScrolled } from '$lib/store';

	export let data: PageData;

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

	// innerHeight as opposed to vh/screen for mobile, to account for mobile bars at bottom.
	$: innerHeight = 0;

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// wait to add bg color as it looks better to have no bg on intro animation.
		if (event.currentTarget.scrollTop > 15) {
			if (!$hasScrolled) $hasScrolled = true;
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}
</script>

<Modal components={modalComponentRegistry} />

<svelte:window bind:innerHeight />

<!-- App Shell -->
<div style={`height: ${innerHeight}px;`}>
	<AppShell on:scroll={scrollHandler}>
		<svelte:fragment slot="header">
			<Header {appBarWrapperElBg} routeId={data.route.id} />
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
