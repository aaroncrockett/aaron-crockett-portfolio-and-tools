<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data;
	export let form;

	let { session, profile } = data;
	$: ({ session, profile } = data);

	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};
</script>

<div class="page-one-col">
	<h2 class="page-header">Account</h2>

	<form
		class="flex flex-col gap-4 sm:w-2/3 md:w-1/2 w-full"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" class="input" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input
				id="fullName"
				class="input"
				name="fullName"
				type="text"
				value={form?.fullName ?? fullName}
			/>
		</div>

		<div>
			<label for="username">Username</label>
			<input
				id="username"
				class="input"
				name="username"
				type="text"
				value={form?.username ?? username}
			/>
		</div>

		<div>
			<input
				type="submit"
				class="btn variant-ghost-secondary block"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>
</div>
