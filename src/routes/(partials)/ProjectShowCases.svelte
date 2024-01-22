<section class=" indented-content">
	<h3 class="text-center uppercase">Project ShowCases</h3>
	<div class="flex items-center gap-2 flex-col">
		<div class="foliole-logo-wrapper foliole-logo-wrapper-options mt-1">
			<a href="https://foliole-ui-docs.vercel.app/"
				><span class="foliole-logo foliole-logo-options foliole-logo-vertical" /></a
			>
		</div>
		<h4 class="foliole-color text-4xl p-0 text-center leading-3xl font-bold">
			<a href="https://foliole-ui-docs.vercel.app/">Foliole UI: Library and Toolkit</a>
		</h4>

		<p class="text-xl">A Framework agnostic UI Toolkit.</p>
		<p class="section-p">
			If you don't know what a component library is and need a summary, <a
				class="inline-link"
				href="/blog/component-libraries">read this</a
			>.
		</p>

		<div class="card p-4 variant-ghost-secondary lg:w-2/3 space-y-4">
			<h4 class="text-gray-900 text-center font-bold">Project Summary</h4>
			<p>
				The base of this project is being made for Power Admin. It came about because I used
				Skeleton UI for Svelte Projects. But we also have projects in Vue. And custom components in
				Vue. And projects that use vue without a build (within Windows software), which don't use
				tailwind. So creating a more flexible library well-suited library made sense to us.
			</p>
			<p>
				I expanded the project for fun and learning. I named it Foliole UI Toolkit. I am also
				creating a theme generator to define colors, margins, padding, and more. The application has
				been deployed to Vercel.
			</p>
			<p class="font-bold text-[18px] text-center">
				I am responsible for the project in its entirety, which includes:
			</p>
			<div class="foliole-list-wrapper">
				<ul>
					<li><span>👉</span> UI and visual experience.</li>
					<li><span>👉</span> Site in Astro.</li>
					<li><span>👉</span> Tailwind Plugin.</li>
					<li>
						<span>👉</span> Node.js script to generate CSS (and the CSSinJS) for Tailwind and vanilla
						CSS purposes.
					</li>
					<li><span>👉</span> Theme Generator written in Svelte.</li>
				</ul>
				<ul>
					<li><span>👉</span> Vue Components.</li>
					<li><span>👉</span> Monorepo using pnpm.</li>
					<li>
						<span>👉</span> Initial testing using Vitest and Svelte Testing Library. (in progress)
					</li>
					<li><span>👉</span> Early project rules and changesets. (in progress)</li>
					<li><span>👉</span> Deployment to Vercel.</li>
				</ul>
			</div>
			<div class="flex flex-col items-center space-y-2">
				<a href="https://github.com/Foliole-UI-Toolkit/foliole-ui" class="inline-link"
					>Foliole on github.</a
				>
				<a href="https://foliole-ui-docs.vercel.app/" class="inline-link">Foliole UI: Demo Site</a>
			</div>
		</div>
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
	.foliole-list-wrapper {
		@apply grid gap-x-4 justify-around;
		grid-template-columns: repeat(auto-fit, minmax(1rem, 18rem));
	}
	.foliole-list-wrapper li {
		@apply leading-[30px] mb-1 text-[18px] text-secondary-900 font-bold;
	}
	.foliole-list-wrapper li span {
		margin-right: 0.25rem;
	}
</style>
