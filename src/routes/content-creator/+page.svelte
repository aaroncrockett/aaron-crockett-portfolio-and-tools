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
	// Intro MountCheck
	let triggerOnMountTransitions = false;
	//
	let enableCustomShortcuts = persisted('enableCustomShortcuts', false);
	let editor: Readable<Editor>;
	let currentColor = persisted('currentColor', '#000');

	function isModifierKey(e: KeyboardEvent) {
		return e.shiftKey && (e.metaKey || e.ctrlKey);
	}
	function isNavigatingsingKeyBoard(e: KeyboardEvent) {
		return !arrowKeys.includes(e.code) && !isModifierKey(e) && e.code !== 'Tab';
	}

	const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
	const whiteListDefaultKeys = ['KeyB', 'KeyI', 'KeyC'];

	let prevKey = '';

	function onKeyDown(e: KeyboardEvent) {
		// Exit if the key is whitelisted.

		console.log(prevKey);

		if ((e.metaKey || e.ctrlKey) && whiteListDefaultKeys.includes(e.code)) {
			return;
		}
		// Only remove default if modifier key is pressed and custom shortcuts are enabled
		if ($enableCustomShortcuts && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
		}
		// Toggle custom shortcut functionality
		if (e.code === 'Digit0' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			$enableCustomShortcuts = !$enableCustomShortcuts;
			return;
		}
		// Don't remove the style if we are moving with an arrow or hitting enter
		if (isNavigatingsingKeyBoard(e) && e.code !== 'Enter') {
			console.log('run me');
			console.log($currentColor);
			$editor.chain().focus().setColor($currentColor).run();
		}
		// Custom shortcuts
		if ($enableCustomShortcuts) {
			// Init Keys
			if ((e.metaKey || e.ctrlKey) && e.code === 'KeyL') {
				console.log('1');
				prevKey = 'KeyL';
				return;
			}
			// Init plus second keys
			if (prevKey === 'KeyL' && e.code === 'Digit1') {
				console.log('2');
				$editor.chain().focus().setColor('#d7424b').run();
				$currentColor = '#d7424b';
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyL' && e.code === 'Digit0') {
				console.log('2');
				$editor.chain().focus().setColor('#000000').run();
				$currentColor = '#000000';
				prevKey = ''; // Reset
				return;
			}
			// No init keys.
			if (e.code === 'Digit1' && (e.metaKey || e.ctrlKey)) {
				console.log('3');
				$editor.chain().focus().setColor('#d7424b').run();
				$editor.commands.setHeading({ level: 1 });
				prevKey = ''; // Reset
				return;
			}
		}
	}

	function onKeyUp(e: KeyboardEvent) {
		// console.log(e.code);
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
					<label for="enable-custom-shortcuts" class="label pl-1">
						Enable Custom Shortcuts <span class="text-sm">(Cmd + Shift + 0 on mac)</span>
					</label>
				</div>
			</div>
			<div>
				<label class="label" for="title">Title</label>
				<input class="input !rounded bg-white" name="title" id="title" type="text" />
			</div>
			<EditorContent editor={$editor} />
			<div>
				<button class="btn variant-ghost-primary w-auto">Submit</button>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
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
