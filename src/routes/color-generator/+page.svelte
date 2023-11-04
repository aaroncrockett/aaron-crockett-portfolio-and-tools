<script lang="ts">
	let color = '#ff0000'; // Default color

	function handleColorChange(event: Event) {
		const input = event.target as HTMLInputElement;
		color = input.value;
	}
</script>

<section>
	<h2 class="page-header">Color Generator</h2>
	<input type="color" bind:value={color} on:input={handleColorChange} />

	<!-- Display selected color -->
	<div>
		Selected color: <span style="background-color: {color};">{color}</span>
	</div>
</section>
