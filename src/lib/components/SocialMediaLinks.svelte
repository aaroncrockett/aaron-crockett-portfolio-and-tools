<script lang="ts">
	import * as feather from 'feather-icons';
	import { clipboard } from '@skeletonlabs/skeleton';

	export let hpLarge = false;

	const emailAddress: string = 'aaron.crockett.00@gmail.com';

	const gitIconSvgXl = feather.icons['github'].toSvg({
		stroke: '#0D5976',
		width: 100,
		height: 100
	});
	const linkedIconSvgXl = feather.icons['linkedin'].toSvg({
		stroke: '#0D5976',
		width: 100,
		height: 100
	});
	const mailIconSvgXl = feather.icons['mail'].toSvg({
		stroke: '#0D5976',
		width: 100,
		height: 100
	});

	const gitIconSvg = feather.icons['github'].toSvg({
		stroke: '#FFFFFF',
		width: 28,
		height: 28
	});
	const linkedIconSvg = feather.icons['linkedin'].toSvg({
		stroke: '#FFFFFF',
		width: 28,
		height: 28
	});
	const mailIconSvg = feather.icons['mail'].toSvg({
		stroke: '#FFFFFF',
		width: 28,
		height: 28
	});

	const gitIconSvgSm = feather.icons['github'].toSvg({
		stroke: '#FFFFFF',
		width: 24,
		height: 24
	});
	const linkedIconSvgSm = feather.icons['linkedin'].toSvg({
		stroke: '#FFFFFF',
		width: 24,
		height: 24
	});
	const mailIconSvgSm = feather.icons['mail'].toSvg({
		stroke: '#FFFFFF',
		width: 24,
		height: 24
	});

	let copied = false;

	function handleCopied() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

{#if hpLarge}
	<button on:click={handleCopied} class="inline-block m-[.325rem]" use:clipboard={emailAddress}>
		{#if copied}
			<span class="text-sm text-secondary-500">COPIED 👍</span>
		{:else}
			<span class="hidden sm:inline">
				{@html mailIconSvgXl}
			</span>
		{/if}
	</button>

	<a
		on:click
		class="inline-block p-[.325rem]"
		href="https://github.com/aaroncrockett/"
		target="_blank"
		rel="noreferrer"
	>
		<span class="hidden sm:inline">
			{@html gitIconSvgXl}
		</span>
	</a>
	<a
		on:click
		class="inline-block p-[.325rem]"
		href="https://www.linkedin.com/in/aaron-crockett-4741176a/"
		target="_blank"
		rel="noreferrer"
	>
		<span class="hidden sm:inline">
			{@html linkedIconSvgXl}
		</span>
	</a>
{:else}
	<button
		on:click={handleCopied}
		class="inline-block sm:m-2 m-[.325rem]"
		use:clipboard={emailAddress}
	>
		{#if copied}
			<span class="text-sm text-secondary-500">COPIED 👍</span>
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
		class="inline-block sm:p-2 p-[.325rem]"
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
		class="inline-block sm:p-2 p-[.325rem]"
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
{/if}
