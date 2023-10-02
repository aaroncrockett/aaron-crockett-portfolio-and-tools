<script lang="ts">
	// local
	import '../app.postcss';
	import SignIn from '$lib/components/SignIn.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Header from '$lib/components/Header.svelte';
	// Svelte & Sveltekit
	import { fade } from 'svelte/transition';
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
	// wait to set height so scroll bar doesn't distract from intro animation.
	// child uses get context to get the store, then inform us that its time to set the vh.
	setContext('viewport-height', viewportHeightSet);

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
<svelte:window bind:innerHeight />

<!-- App Shell -->
<div style={$viewportHeightSet ? `height: ${innerHeight}px;` : ''}>
	<AppShell on:scroll={scrollHandler}>
		<svelte:fragment slot="header">
			<Header {appBarWrapperElBg} routeId={data.route.id} />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
		<svelte:fragment slot="footer">
			{#if $hasScrolled}
				<div in:fade class="bg-surface-500">
					<div class="p-2 container mx-auto">
						<div class="sm:inline-block">
							<a href="/">
								<span class="text-primary-500">AARON {$hasScrolled}</span>
								<span class="text-tertiary-500">CROCKETT</span> |
							</a>
						</div>
						<div class="sm:inline-block">
							<span class="text-white">WEB APPLICATION DEVELOPER</span>
						</div>
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AppShell>
</div>
