<script lang="ts">
	import InteractiveCvSignInPart from './InteractiveCVSignInPart.svelte';
	import InteractiveCvBotPart from './InteractiveCVBotPart.svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';
	// Skeleton Types
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	// Firebase related
	import { auth } from '$lib/firebaseClient';
	import { userStore } from 'sveltefire';

	const modalStore = getModalStore();

	const user = userStore(auth);

	function showModal(e: any) {
		const component = e.target.dataset.signin || e.target.dataset.signup;

		const modal: ModalSettings = {
			type: 'component',
			component: component
		};
		modalStore.trigger(modal);
	}
</script>

{#if $user?.uid}
	<InteractiveCvBotPart />
{/if}

{#if !$user?.uid}
	<InteractiveCvSignInPart on:click={(e) => showModal(e)} />
{/if}
