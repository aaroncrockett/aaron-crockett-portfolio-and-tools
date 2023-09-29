<script lang="ts">
	// local
	import '../app.postcss';
	import SignIn from '$lib/components/SignIn.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Header from '$lib/components/Header.svelte';
	// Svelte & Sveltekit
	import { setContext, type ComponentEvents } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	// Skeleton Labs
	import {
		AppShell,
		Drawer,
		Modal,
		getDrawerStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	// Stores and Libs
	import { hasScrolled } from '$lib/store';

	export let data: PageData;

	initializeStores();

	const drawerStore = getDrawerStore();

	const modalComponentRegistry: Record<string, ModalComponent> = {
		signIn: {
			ref: SignIn
		},
		signUp: {
			ref: SignUp
		}
	};

	let appBarWrapperElBg = '';

	const viewportHeightSet = writable(false);

	setContext('viewport-height', viewportHeightSet);

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		if (!$hasScrolled) $hasScrolled = true;
		if (event.currentTarget.scrollTop > 10) {
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}
</script>

<Modal components={modalComponentRegistry} />
<Drawer>
	<div class="variant-primary p-4">
		<p>
			OOOPPS you found this drawer on accident! It's ok. It just includes test examples I was
			working on. hehe.
		</p>
		<ul>
			<li><a class="text-white" on:click={() => drawerStore.close()} href="/">Home</a></li>
			<li>
				<a class="text-white" on:click={() => drawerStore.close()} href="/form-example"
					>Form Example</a
				>
			</li>
		</ul>
	</div>
</Drawer>

<!-- App Shell -->
<AppShell class={$viewportHeightSet && 'h-screen'} on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<Header {appBarWrapperElBg} routeId={data.route.id} />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
