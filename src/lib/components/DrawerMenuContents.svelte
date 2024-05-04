<script lang="ts">
	import SocialMediaLinks from '$lib/components/SocialMediaLinks.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';
	import type { Writable } from 'svelte/store';
	// Svelte
	import { getContext } from 'svelte';
	// UI Related
	import * as feather from 'feather-icons';
	// Types
	import type { DrawerStore } from '@skeletonlabs/skeleton';

	const homeIconSvg = feather.icons['home'].toSvg({
		stroke: '#ffffff',
		width: 28,
		height: 28
	});

	const homeIconSvgSm = feather.icons['home'].toSvg({
		stroke: '#ffffff',
		width: 24,
		height: 24
	});

	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#ffffff',
		width: 12,
		height: 12
	});
	const drawerStore = getContext('drawer-store') as DrawerStore;
	const sessionId = getContext<Writable<string>>('session-id');
</script>

<div class="flex">
	<div class="p-2 space-y-4">
		<div class="border-primary-500">
			<a on:click={() => drawerStore.close()} class="inline-block p-2 pb-0" href="/?return-home">
				<span class="hidden sm:inline-block">
					{@html homeIconSvg}
				</span>
				<span class="inline-block space-y-2 sm:hidden">
					{@html homeIconSvgSm}
				</span>
			</a>
		</div>
		<div class="flex flex-col items-center space-y-4">
			<SocialMediaLinks on:click={() => drawerStore.close()} />
		</div>
	</div>
	<div class="flex flex-col w-full h-screen p-2 variant-soft-surface">
		<h3
			class="p-1 sm:p-2 border-b leading-sm text-white inline-block font-bold border-white !text-xl mb-2 sm:text-base"
		>
			Tools and more.
		</h3>
		<p class="ml-2 text-surface-100 italic mb-3">
			Everything under this menu is a work in progress and under development. But feel free to look.
		</p>
		<PageLinks showChevron={true} on:click={() => drawerStore.close()} />
		<div class="flex items-center pl-1">
			{#if $sessionId}
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
				<form method="post" action="sign-out">
					<button class="font-bold uppercase text-primary-500">Sign Out</button>
				</form>
			{/if}
		</div>
	</div>
</div>
