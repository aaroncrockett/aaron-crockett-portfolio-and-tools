<script lang="ts">
	import SocialMediaLinks from '$lib/components/SocialMediaLinks.svelte';
	import PageLinks from '$lib/components/PageLinks.svelte';
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
	const drawerStore = getContext('drawer-store') as DrawerStore;
</script>

<div class="flex">
	<div class="flex flex-col gap-2 p-2">
		<a on:click class="inline-block p-1 sm:p-2" href="/">
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
