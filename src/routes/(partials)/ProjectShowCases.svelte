<script>
	import folioCg from '$lib/images/foliole-cg.webp';
	import folioHl from '$lib/images/foliole-hl.webp';
	import folioInterface from '$lib/images/foliole-interface.webp';
	import folioInterfaceSm from '$lib/images/foliole-interface.webp';
</script>

<section>
	<h3 class="text-center md:text-left">Project ShowCases</h3>

	<div class="space-y-8">
		<div>
			<h4
				class="foliole-color text-4xl leading-5xl md:text-6xl p-0 md:leading-8xl font-bold text-center md:text-left"
			>
				<a href="https://foliole-ui-docs.vercel.app7">Foliole UI: Library and Toolkit</a>
			</h4>
			<p class="text-2xl text-center leading-3xl md:text-4xl md:leading-4xl md:text-left">
				A Framework agnostic UI Toolkit.
			</p>
		</div>
		<div class="flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center">
			<picture class=" md:w-[calc(33.33%-.25rem)] flex-initial h-auto">
				<source media="(max-width: 767px)" srcset={folioInterfaceSm} />
				<img
					src={folioInterface}
					class="border-4 rounded-md w-full"
					alt="App Supervisor Interface."
					width="650"
					height="1200"
				/>
			</picture>
			<img
				src={folioHl}
				class="border-4 rounded-md md:block hidden md:w-[calc(33.33%-.25rem)] flex-initial h-auto"
				alt="App Supervisor Interface."
				width="900"
				height="492"
			/>
			<img
				src={folioCg}
				class="border-4 rounded-md md:block hidden md:w-[calc(33.33%-.25rem)] flex-initial h-auto"
				alt="App Supervisor Interface."
				width="650"
				height="1200"
			/>
		</div>
		<div class="space-y-4 area-two-col mx-auto">
			<div class="space-y-4">
				<h4
					class="foliole-color text-4xl leading-5xl md:text-6xl p-0 md:leading-8xl font-bold text-center md:text-left"
				>
					Project Summary
				</h4>
				<p>
					If you don't know what a component library is and need a summary, <a
						class="inline-link"
						href="/blog/component-libraries">read this</a
					>.
				</p>
				<p>
					The base of this project is being made for a client. It arose because the client has UIs
					written in Vue, without a build system. They are currently developing web applications
					using Tailwind. They need UI component solutions that can work regardless of the framework
					and CSS solution, in past current and future projects.
				</p>
				<p>
					I expanded the project for fun and learning by adding a Theme Generator. I named it
					Foliole UI Toolkit. The application has been deployed to Vercel.
				</p>
				<div class="flex flex-col items-center space-y-2">
					<a href="https://github.com/Foliole-UI-Toolkit/foliole-ui" class="inline-link"
						>Foliole on github.</a
					>
					<a href="https://foliole-ui-docs.vercel.app/" class="inline-link">Foliole UI: Demo Site</a
					>
				</div>
			</div>
			<div class="card p-4">
				<p class="font-bold text-[18px] text-center">
					I am responsible for the project in its entirety, which includes:
				</p>
				<div>
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
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.section-p {
		@apply lg:w-2/3 sm:w-4/5 mx-auto text-center;
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
	ul li {
		@apply leading-[30px] mb-1 text-[18px] text-secondary-900 font-bold;
	}
	ul li span {
		margin-right: 0.25rem;
	}
	.img-responsive {
		@apply max-w-full h-auto object-cover;
	}
</style>
