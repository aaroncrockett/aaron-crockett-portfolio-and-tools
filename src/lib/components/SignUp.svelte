<script lang="ts">
	// sveltekit
	import { browser } from '$app/environment';

	const modalStore = getModalStore();

	import { getModalStore } from '@skeletonlabs/skeleton';

	// other npm packages
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	// style/layout
	// lib
	import { auth } from '$lib/firebaseClient';

	let email = '';
	let password = '';
	let errorMessage = '';

	function handleSignUp() {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				modalStore.close();
			})
			.catch((error) => {
				errorMessage = error.message;
			});
	}
</script>

<div class="p-2 shadow-xl w-modal ring-0 variant-ghost-primary card">
	<div class="variant-filled-surface card space-y-4 p-4">
		<p class="text-center">Sign up with email and password:</p>
		{#if browser}
			<form
				class="modal-form rounded-container-token forder p-4 space-y-4 border-surface-500"
				on:submit|preventDefault={handleSignUp}
			>
				<label>
					<span>Email</span>
					<input class="input text-surface-900" required type="email" bind:value={email} />
				</label>
				<label>
					<span>Password</span>
					<input class="input text-surface-900" required type="password" bind:value={password} />
				</label>
				<button class="btn variant-ghost-primary" align="left" type="submit">Sign Up!</button>
			</form>
			{#if errorMessage}
				<div class="mt-2 text-error-500">
					{errorMessage}
				</div>
			{/if}
		{/if}
	</div>
</div>
