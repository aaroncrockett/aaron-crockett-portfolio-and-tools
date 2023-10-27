<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data;
	export let form;

	let { session, profile } = data;
	$: ({ session, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<div class="page-one-col">
	<h2 class="page-header">Account</h2>
	<div class="sm:w-2/3 md:w-1/2 w-full flex flex-col gap-2">
		<form
			class="flex flex-col gap-2"
			method="post"
			action="?/update"
			use:enhance={handleSubmit}
			bind:this={profileForm}
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
					class="btn btn-sm variant-ghost-secondary block"
					value={loading ? 'Loading...' : 'Update'}
					disabled={loading}
				/>
			</div>
		</form>

		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<button class="btn variant-ghost-primary" disabled={loading}>Sign Out</button>
		</form>
	</div>
</div>
