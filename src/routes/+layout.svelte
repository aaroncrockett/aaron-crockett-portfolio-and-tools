<script lang="ts">
	// CSS
	import '../app.postcss';
	// Svelte
	import { onMount } from 'svelte';
	import type { ComponentEvents } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// Skeleton Labs
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// Other
	import classNames from 'classnames';

	let triggerOnMountTransitions = false;

	let appBarWrapperElBg = '';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		if (event.currentTarget.scrollTop > 10) {
			appBarWrapperElBg = 'bg-surface-600 shadow-sm';
		}
	}

	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		{#if triggerOnMountTransitions}
			<div
				transition:fade={{ easing: cubicIn, duration: 800 }}
				class={classNames('fixed top-0 right-0 left-0', `${appBarWrapperElBg}`)}
			>
				<AppBar class="container mx-auto" background="bg-none">
					<svelte:fragment slot="lead">
						<div class="text-2xl uppercase sm:text-3xl sm:leading-3xl leading-2xl">
							<span class="text-primary-500">AARON</span>
							<span class="text-tertiary-500">HAPPE</span>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<a
							class="hidden text-white btn sm:inline-block variant-ghost-primary"
							href="https://github.com/aaronmichaelhappe/portolio-skeleton-ui"
							target="_blank"
							rel="noreferrer"
						>
							Discord
						</a>
						<a
							class="hidden font-bold text-white btn sm:inline-block variant-ghost-primary"
							href="https://github.com/aaronmichaelhappe/portolio-skeleton-ui"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
						</a>
						<a
							class="hidden font-bold text-white btn sm:inline-block variant-ghost-primary"
							href="https://github.com/aaronmichaelhappe/portolio-skeleton-ui"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</svelte:fragment>
				</AppBar>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
