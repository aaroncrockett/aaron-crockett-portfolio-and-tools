<script lang="ts">
	// import { Auth } from '@supabase/auth-ui-svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';

	export let data;

	let email = '';
	let magicLinkResponseText = '';
	let triggerOnMountTransitions = false;
	let error = false;

	async function sendMagicLink() {
		const localData = await data?.supabase?.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: `${data.url}/auth/callback`
			}
		});
		if (localData?.error) {
			error = true;
			magicLinkResponseText = localData?.error?.message;
		} else {
			magicLinkResponseText = 'Link sent to your email.';
		}
	}
	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

{#if triggerOnMountTransitions}
	<div class="page-one-col" transition:fade={{ easing: cubicIn, duration: 400 }}>
		<div class=" sm:w-2/3 md:w-1/2 w-full">
			<div class="space-y-2">
				<label for="email">Email</label>
				<input bind:value={email} id="email" class="input" type="text" />
				<button class="btn variant-ghost-primary" on:click={sendMagicLink}>
					Send Magic Link
				</button>
				<p class={`${error ? 'text-error-500' : 'text-surface-500 '} text-center`}>
					{magicLinkResponseText}
				</p>
			</div>
		</div>
	</div>
{/if}
