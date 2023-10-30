<script lang="ts">
	import Intro from './(partials)/Intro.svelte';
	import EditorComponent from './(partials)/EditorComponent.svelte';
	// Svelte related
	import { onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import type { Readable } from 'svelte/store';
	// Tiptap related
	import { createEditor, Editor } from 'svelte-tiptap';
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

	const whiteListDefaultKeys = ['KeyB', 'KeyI', 'KeyC', 'KeyV'];

	setContext('enableCustomShortcutsStore', enableCustomShortcuts);

	let prevKey = '';

	function onKeyDown(e: KeyboardEvent) {
		// Exit if the key is whitelisted.
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
		// Custom shortcuts
		if ($enableCustomShortcuts) {
			// Init Keys
			if ((e.metaKey || e.ctrlKey) && e.code === 'KeyL') {
				prevKey = 'KeyL';
				return;
			}
			if ((e.metaKey || e.ctrlKey) && e.code === 'KeyH') {
				prevKey = 'KeyH';
				return;
			}
			// Init plus second keys
			// KeyL
			if (prevKey === 'KeyL' && e.code === 'Digit1') {
				$editor.commands.setColor('#d7424b');
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyL' && e.code === 'Digit2') {
				$editor.commands.setColor('#8BBBE4');
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyL' && e.code === 'Digit0') {
				$editor.commands.setColor('#000000');
				prevKey = ''; // Reset
				return;
			}
			// KeyH
			if (prevKey === 'KeyH' && e.code === 'Digit1') {
				$editor.chain().focus().setHeading({ level: 1 }).run();
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyH' && e.code === 'Digit2') {
				$editor.chain().focus().setHeading({ level: 2 }).run();
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyH' && e.code === 'Digit3') {
				$editor.chain().focus().setHeading({ level: 3 }).run();
				prevKey = ''; // Reset
				return;
			}
			if (prevKey === 'KeyH' && e.code === 'Digit4') {
				$editor.chain().focus().setHeading({ level: 4 }).run();
				prevKey = ''; // Reset
				return;
			}
			// No init keys.
			if ((e.metaKey || e.ctrlKey) && e.code === 'KeyP') {
				$editor.chain().focus().setHeading({ level: 4 }).run();
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
			extensions: [StarterKit, Heading, TextStyle, Color],
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
		<EditorComponent {editor} />
	</div>
{/if}

<style lang="postcss">
	:global(.tiptap h1) {
		@apply font-bold prose-6xl;
	}
	:global(.tiptap h2) {
		@apply font-bold prose-5xl;
	}
	:global(.tiptap h3) {
		@apply font-bold prose-4xl;
	}
	:global(.tiptap h4) {
		@apply font-bold prose-3xl;
	}
	:global(.tiptap h5) {
		@apply font-bold prose-2xl;
	}
	:global(.tiptap h6) {
		@apply font-bold prose-xl;
	}
</style>
