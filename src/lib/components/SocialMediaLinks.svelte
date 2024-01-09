<script lang="ts">
	import * as feather from 'feather-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	const emailAddress: string = 'aaron.crockett.00@gmail.com';

	const gitIconSvg = feather.icons['github'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const linkedIconSvg = feather.icons['linkedin'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});
	const mailIconSvg = feather.icons['mail'].toSvg({
		stroke: '#d7424b',
		width: 28,
		height: 28
	});

	const gitIconSvgSm = feather.icons['github'].toSvg({
		stroke: '#d7424b',
		width: 22,
		height: 22
	});
	const linkedIconSvgSm = feather.icons['linkedin'].toSvg({
		stroke: '#d7424b',
		width: 22,
		height: 22
	});
	const mailIconSvgSm = feather.icons['mail'].toSvg({
		stroke: '#d7424b',
		width: 22,
		height: 22
	});

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
			{@html mailIconSvg}
		</span>
		<span class="inline sm:hidden">
			{@html mailIconSvgSm}
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
		{@html gitIconSvg}
	</span>
	<span class="inline sm:hidden">
		{@html gitIconSvgSm}
	</span>
</a>
<a
	on:click
	class=" sm:p-1 inline-block"
	href="https://www.linkedin.com/in/aaron-crockett-4741176a/"
	target="_blank"
	rel="noreferrer"
>
	<span class="hidden sm:inline">
		{@html linkedIconSvg}
	</span>
	<span class="inline sm:hidden">
		{@html linkedIconSvgSm}
	</span>
</a>
