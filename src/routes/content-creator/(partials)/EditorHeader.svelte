<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';
	const enableCustomShortcutsStore = getContext<Writable<any>>('enableCustomShortcutsStore');
</script>

<div class="controls-header flex">
	<div class="flex justify-center">
		<input
			class="checkbox"
			type="checkbox"
			name="enable-custom-shortcuts"
			id="enable-custom-shortcuts"
			bind:checked={$enableCustomShortcutsStore}
		/>
		<label for="enable-custom-shortcuts" class="label pl-1">
			Enable Custom Shortcuts <span class="text-sm">(Cmd + Shift + 0 on mac)</span>
		</label>
	</div>
</div>
<div>
	<label class="label" for="title">Title</label>
	<input class="input !rounded bg-white" name="title" id="title" type="text" />
</div>
