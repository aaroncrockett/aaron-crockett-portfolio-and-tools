<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;

	let email = '';

	async function sendMagicLink() {
		const { data: localData, error } = await data.supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: `${data.url}/auth/callback`
			}
		});
	}
</script>

<div class="page-one-col">
	<div class=" sm:w-2/3 md:w-1/2 w-full">
		<div class="flex flex-col gap-2">
			<label for="email">Email</label>
			<input bind:value={email} id="email" class="input" type="text" />
			<button class="btn variant-ghost-primary" on:click={sendMagicLink}> Send Magic Link </button>
		</div>
	</div>
</div>
