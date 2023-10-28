<script lang="ts">
	import Intro from './(partials)/Intro.svelte';
	// Svelte related
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import type { Readable } from 'svelte/store';
	// Tiptap related
	import { createEditor, Editor, EditorContent, BubbleMenu } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { Heading } from '@tiptap/extension-heading';
	import { Color } from '@tiptap/extension-color';
	import TextStyle from '@tiptap/extension-text-style';
	// Other
	import { persisted } from 'svelte-persisted-store';

	let triggerOnMountTransitions = false;

	let enableCustomShortcuts = persisted('enableCustomShortcuts', false);
	let editor: Readable<Editor>;

	function onKeyDown(e: KeyboardEvent) {
		if (e.code === 'Digit0' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
			$enableCustomShortcuts = !$enableCustomShortcuts;
			e.preventDefault();
		}
	}

	function onKeyUp(e) {
		console.log(e.code);
	}

	onMount(() => {
		triggerOnMountTransitions = true;
		editor = createEditor({
			extensions: [
				StarterKit,
				Heading.configure({
					HTMLAttributes: {
						levels: [1, 2, 3, 4]
					}
				}),
				TextStyle,
				Color
			],
			editorProps: {
				attributes: {
					class: 'p-3 bg-white rounded min-h-[35vh] border border-surface-400'
				}
			},
			content: `Hello world! Edit this content!`
		});
	});
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />

{#if triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 600 }} class="page-one-col page-section">
		<Intro />
		<div class="editor flex flex-col gap-2">
			<div class="controls-header flex">
				<div class="flex justify-center">
					<input
						class="checkbox"
						type="checkbox"
						name="enable-custom-shortcuts"
						id="enable-custom-shortcuts"
						bind:checked={$enableCustomShortcuts}
					/>
					<label for="enable-custom-shortcuts" class="label pl-1"> Enable Custom Shortcuts </label>
				</div>
			</div>
			<div>
				<label class="label" for="title">Title</label>
				<input class="input !rounded bg-white" name="title" id="title" type="text" />
			</div>
			<EditorContent editor={$editor} />
			<div>
				<button class="btn variant-ghost-secondary w-auto">Submit</button>
			</div>

			<!-- <BubbleMenu editor={$editor}>
				<div class={'bg-surface-700 rounded p-2 flex flex-col gap-2'}>
					<div class="flex gap-1">
						<button
							class="context-button"
							on:click={() => $editor.commands.setHeading({ level: 1 })}
						>
							H1
						</button>
						<button
							class="context-button"
							on:click={() => $editor.commands.setHeading({ level: 2 })}
						>
							H2
						</button>
					</div>
					<div class="flex gap-1">
						<button
							class="context-button"
							on:click={() => $editor.chain().focus().setColor('#d7424b').run()}
						>
							Red
						</button>
						<button
							class="context-button"
							on:click={() => $editor.chain().focus().setColor('#000000').run()}
						>
							Black
						</button>
					</div>
				</div>
			</BubbleMenu> -->
		</div>
	</div>
{/if}

<style lang="postcss">
	/* .context-button::before {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 50%;
		transform: translateX(-50%);
		border-width: 12px;
		border-style: solid;
		border-color: #000 transparent transparent;
	} */
	:global(.tiptap h1) {
		@apply !text-6xl font-bold;
	}
	:global(.tiptap h2) {
		@apply !text-4xl font-bold;
	}
	:global(.tiptap h3) {
		@apply !text-3xl font-bold;
	}
	:global(.tiptap h4) {
		@apply !text-2xl font-bold;
	}
</style>
