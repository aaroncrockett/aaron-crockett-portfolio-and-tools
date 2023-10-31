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
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const homeIconSvgSm = feather.icons['home'].toSvg({
		stroke: '#d7424b',
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
	<div class="flex flex-col gap-2 p-2">
		<div class="border-b border-primary-500">
			<a on:click={() => drawerStore.close()} class="inline-block p-1 sm:p-2" href="/">
				<span class="hidden sm:inline-block">
					{@html homeIconSvg}
				</span>
				<span class=" inline-block sm:hidden">
					{@html homeIconSvgSm}
				</span>
			</a>
		</div>
		<SocialMediaLinks on:click={() => drawerStore.close()} />
	</div>
	<div class="flex flex-col variant-soft-surface p-2 w-full h-screen">
		<h3
			class="p-1 sm:p-2 border-b leading-sm text-tertiary-500 inline-block font-bold border-tertiary-500 !text-xl mb-2 sm:text-base"
		>
			Tools and more.
		</h3>
		<PageLinks showChevron={true} on:click={() => drawerStore.close()} />
		<div class="flex items-center pl-1">
			{#if $sessionId}
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
				<form method="post" action="sign-out">
					<button class="text-primary-500 uppercase font-bold">Sign Out</button>
				</form>
			{/if}
		</div>
	</div>
</div>
