<script lang="ts">
	import type { Readable } from 'svelte/store';
	import { EditorContent } from 'svelte-tiptap';
	import EditorHeader from './EditorHeader.svelte';
	export let editor: Readable<any>;
</script>

<div class="editor flex flex-col gap-2">
	<EditorHeader />
	<EditorContent editor={$editor} />
	<div>
		<button class="btn variant-ghost-primary w-auto">Submit</button>
	</div>
</div>
