<script lang="ts">
	import * as feather from 'feather-icons';

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
	const gitIconSvgSm = feather.icons['github'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});

	const linkedIconSvgSm = feather.icons['linkedin'].toSvg({
		stroke: '#d7424b',
		width: 24,
		height: 24
	});
</script>

<a
	on:click
	class="inline-block p-1 sm:p-2"
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
	class="p-1 sm:p-2 inline-block"
	href="https://www.linkedin.com/in/aaron-happe-crockett-4741176a/"
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
