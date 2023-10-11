<script lang="ts">
	import SignInto from '$lib/components/SignInto.svelte';
	import ProjectShowCasesBotPart from './ProjectShowCasesBotPart.svelte';
	import ProjectShowCasesSkeletalPart from './ProjectShowCasesSkeletalPart.svelte';
	// Skeleton related
	import { getModalStore } from '@skeletonlabs/skeleton';
	// Skeleton Types
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	// Firebase related
	import { auth } from '$lib/firebaseClient';
	import { userStore } from 'sveltefire';

	const modalStore = getModalStore();
	const user = userStore(auth);

	function showModal(e: Event) {
		const target = e?.target as HTMLElement; // Cast to HTMLElement

		const component = target?.dataset?.signin || target?.dataset?.signup;

		const modal: ModalSettings = {
			type: 'component',
			component: component
		};
		modalStore?.trigger(modal);
	}
</script>

<h2
	class="text-center text-3xl sm:text-4xl sm:leading-3xl text-surface-500 font-bold leading-2xl p-2"
>
	Project Showcases
</h2>
<ProjectShowCasesSkeletalPart />
{#if $user?.uid}
	<ProjectShowCasesBotPart />
{:else}
	<SignInto on:click={(e) => showModal(e)} />
{/if}
