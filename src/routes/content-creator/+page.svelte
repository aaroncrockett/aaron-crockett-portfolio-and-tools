<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import type { Readable } from 'svelte/store';
	import { createEditor, Editor, EditorContent, BubbleMenu } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { Heading } from '@tiptap/extension-heading';
	import { Color } from '@tiptap/extension-color';
	import TextStyle from '@tiptap/extension-text-style';

	let triggerOnMountTransitions = false;
	let editor: Readable<Editor>;

	onMount(() => {
		triggerOnMountTransitions = true;
		editor = createEditor({
			extensions: [
				StarterKit,
				Heading.configure({
					HTMLAttributes: {
						levels: [1, 2]
					}
				}),
				TextStyle,
				Color
			],
			editorProps: {
				attributes: {
					class: 'p-4 variant-soft-surface rounded'
				}
			},
			content: `Hello world! Edit this content!`
		});
	});
</script>

{#if triggerOnMountTransitions}
	<div transition:fade={{ easing: cubicIn, duration: 600 }} class="page-one-col page-section">
		<!-- <Tiptap /> -->
		<h3 class="page-header">Content Creator</h3>
		<h4>A tool to create content with attached styling, tags, quizzes, notes and more.</h4>
		<p class="font-bold">Edit the content bellow:</p>
		<EditorContent editor={$editor} />
		<BubbleMenu editor={$editor}>
			<div class={'bg-surface-700 rounded p-2 flex flex-col gap-2'}>
				<div class="flex gap-1">
					<button class="context-button" on:click={() => $editor.commands.setHeading({ level: 1 })}>
						h1
					</button>
					<button class="context-button" on:click={() => $editor.commands.setHeading({ level: 2 })}>
						h2
					</button>
					<button
						class="context-button"
						on:click={() => $editor.chain().focus().toggleStrike().run()}
					>
						strike
					</button>
				</div>
				<div class="flex gap-1">
					<button
						class="context-button"
						on:click={() => $editor.chain().focus().setColor('#d7424b').run()}
					>
						Red
					</button>
				</div>
			</div>
		</BubbleMenu>
	</div>
{/if}

<style lang="postcss">
	.context-button {
		@apply variant-soft-primary p-1 rounded;
	}
	:global(.tiptap h1) {
		@apply !text-3xl font-bold;
	}
	:global(.tiptap h2) {
		@apply !text-xl font-bold;
	}
</style>
