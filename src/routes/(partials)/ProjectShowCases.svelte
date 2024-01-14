<section class="card indented-content">
	<h3 class="text-center uppercase">Project ShowCases</h3>
	<div class="flex items-center gap-2 flex-col b">
		<div class="foliole-logo-wrapper foliole-logo-wrapper-options">
			<a href="https://foliole-ui-docs.vercel.app/"
				><span class="foliole-logo foliole-logo-options foliole-logo-vertical" /></a
			>
		</div>
		<h4 class="foliole-color text-gray-600 text-4xl p-0 text-center">
			<a href="https://foliole-ui-docs.vercel.app/">Foliole UI: Library and Toolkit</a>
		</h4>

		<p class="text-xl">A Framework agnostic UI Toolkit</p>
		<p class="section-p">
			If you don't know what a component library is and need a summary, <a
				class="inline-link"
				href="/blog/component-libraries">read this</a
			>.
		</p>
		<a href="https://github.com/Foliole-UI-Toolkit/foliole-ui" class="inline-link"
			>Foliole on github.</a
		>
		<a href="https://foliole-ui-docs.vercel.app/" class="inline-link">Foliole UI: Demo Site</a>
	</div>
</section>

<style lang="postcss">
	.section-p {
		@apply lg:w-2/3 sm:w-4/5 mx-auto text-center;
	}
	.foliole-color {
		color: rgb(59 130 177);
	}
	.foliole-logo {
		@apply flex self-center flex-shrink-0 border-[.175rem] rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg shadow-sm;
		border-color: rgb(112, 132, 146);
	}

	.foliole-logo-options {
		background: linear-gradient(45deg, rgb(164, 214, 255), rgb(138, 202, 253));
	}

	.foliole-logo-vertical {
		@apply flex-col w-7 h-7;
	}

	.foliole-logo-wrapper {
		@apply flex;
	}

	.foliole-logo-wrapper-options {
		@apply flex-row;
	}

	.foliole-logo-h1 {
		@apply font-bold whitespace-nowrap uppercase;
	}

	.foliole-logo-h1-horizontal {
		@apply text-2xl;
	}

	.foliole-logo-h1-vertical {
		@apply text-4xl;
	}

	.foliole-logo-text-ui {
		background: linear-gradient(45deg, rgb(141, 254, 238 / 1), rgb(138, 202, 253 / 1));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
