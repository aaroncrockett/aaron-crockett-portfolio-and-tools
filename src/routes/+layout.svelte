<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<div class="bg-surface-800">
			<AppBar class="container mx-auto" background="bg-surface-800 fixed top-0 right-0 left-0">
				<svelte:fragment slot="lead">
					<strong class="text-2xl sm:text-4xl sm:leading-4xl leading-2xl text-secondary-500"
						><span class="uppercase text-primary-500">A</span><span
							class="uppercase text-tertiary-500">C</span
						>Digital</strong
					>
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
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
