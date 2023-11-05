<script lang="ts">
	import type { ColorNames } from '$lib/types';
	import { swatchColorClasses } from '../settings';

	export let color: ColorNames = 'primary';
	export let stops: string[];
</script>

<div class="flex">
	{#each Object.entries(swatchColorClasses[color]).filter( ([shade]) => stops.includes(shade) ) as [shade, shadeClasses]}
		<div class="grid grid-rows-[1fr_40px] text-center w-full">
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->

			<div class="h-full flex justify-center items-center {shadeClasses}">
				{#if shade === '500'}
					<div>
						<span class="hidden sm:inline-block">Text</span>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
