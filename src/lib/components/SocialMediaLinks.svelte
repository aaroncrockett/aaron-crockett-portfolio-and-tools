<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton';
	import MailSvg from '$lib/components/icons/MailSvg.svelte';
	import GitSvg from '$lib/components/icons/GitSvg.svelte';
	import LinkedInSvg from '$lib/components/icons/LinkedInSvg.svelte';

	const emailAddress: string = 'aaron.crockett.00@gmail.com';

	let copied = false;

	function handleCopied() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<button on:click={handleCopied} class="inline-block sm:p-1" use:clipboard={emailAddress}>
	{#if copied}
		<span class="text-sm text-tertiary-500">COPIED 👍</span>
	{:else}
		<span class="hidden sm:inline">
			<MailSvg />
		</span>
		<span class="inline sm:hidden">
			<MailSvg size="w-6 h-6" />
		</span>
	{/if}
</button>

<a
	on:click
	class="inline-block sm:p-1"
	href="https://github.com/aaroncrockett/"
	target="_blank"
	rel="noreferrer"
>
	<span class="hidden sm:inline">
		<GitSvg />
	</span>
	<span class="inline sm:hidden">
		<GitSvg size="w-6 h-6" />
	</span>
</a>
<a
	on:click
	class=" sm:p-1 inline-block"
	href="https://www.linkedin.com/in/aaron-happe-crockett-4741176a/"
	target="_blank"
	rel="noreferrer"
>
	<span class="hidden sm:inline">
		<LinkedInSvg />
	</span>
	<span class="inline sm:hidden">
		<LinkedInSvg size="w-6 h-6" />
	</span>
</a>
