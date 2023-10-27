<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	// UI Related
	import * as feather from 'feather-icons';

	let triggerOnMountTransitions = false;

	const chevronRightIconSvg = feather.icons['chevron-right'].toSvg({
		stroke: '#000000',
		width: 12,
		height: 12
	});
	onMount(() => {
		triggerOnMountTransitions = true;
	});
</script>

<!-- This blog will be done in markdown. And dynamic sidebar. This is a placeholder -->
{#if triggerOnMountTransitions}
	<div class="page-two-col" transition:fade={{ easing: cubicIn, duration: 400 }}>
		<div class="page-col order-2 variant-soft-surface sm:order-1">
			<a class="flex items-center" href="/blog">
				<span class="pr-[.1rem]">{@html chevronRightIconSvg}</span>
				Component Libraries</a
			>
		</div>
		<div class="page-col order-1 page-section sm:order-1">
			<h2 class="page-header">Component Libraries</h2>
			<div class="p-1 bg-gradient-to-r variant-gradient-primary-secondary" />
			<div class="variant-ghost-secondary p-2 rounded">
				<span class="block">
					<span class="text-secondary-800 font-bold">Written By: </span></span
				><span class="font-bold text-xl">Aaron Crockett's AI Robot.</span>

				<span class="font-bold block italic"> Oct 25, 2023 </span>
			</div>

			<p>
				In the ever-evolving world of web development, efficiency, consistency, and reusability are
				key factors in delivering high-quality applications. One of the tools that have gained
				immense popularity for achieving these goals is a Component Library. In this blog post, we
				will dive into what a Component Library is, why it matters, and how it can streamline your
				development process.
			</p>
			<h3>What is a Component Library?</h3>
			<p>
				At its core, a Component Library is a collection of pre-designed, reusable components that
				can be easily integrated into your web projects. These components can range from simple
				buttons and form elements to complex data grids and navigation bars. Each component is
				designed with a specific purpose, functionality, and styling in mind, making it easy for
				developers to maintain consistency across their projects.
			</p>
			<h3>Why Use a Component Library?</h3>
			<p>1. Consistency</p>
			<p>
				One of the primary benefits of using a Component Library is the ability to maintain a
				consistent look and feel throughout your web applications. When you have a standardized set
				of components, such as buttons, input fields, and typography, you can ensure that your user
				interface remains cohesive across different pages and sections of your site.
			</p>
			<p>2. Reusability</p>
			<p>
				Imagine not having to reinvent the wheel every time you need to create a new UI element.
				With a Component Library, you can reuse components across various projects, saving you time
				and effort. This reusability also helps in reducing the chances of introducing bugs or
				inconsistencies when implementing similar features.
			</p>
			<p>3. Faster Development</p>
			<p>
				Speed is often crucial in web development. Component Libraries offer a shortcut to faster
				development by providing pre-built solutions for common UI elements. Instead of writing code
				from scratch, you can simply import and customize these components, significantly reducing
				development time.
			</p>
			<p>4. Collaboration</p>
			<p>
				Component Libraries promote collaboration among developers and designers. When your team is
				working on a project, having a shared library of components ensures that everyone is on the
				same page regarding design patterns and UI elements. This leads to smoother teamwork and
				better project outcomes.
			</p>
			<h3>Conclusion</h3>
			<p>
				In the fast-paced world of web development, Component Libraries have become indispensable
				tools for building consistent, efficient, and visually appealing web applications. They
				empower developers to streamline their workflows, save time, and focus on delivering
				outstanding user experiences. Whether you choose a popular library or create your own,
				integrating a Component Library into your projects is a step toward becoming a more
				efficient and productive web develop
			</p>
			<p>
				So, the next time you embark on a web development journey, consider harnessing the power of
				Component Libraries to simplify your work and elevate your projects to new heights.
			</p>
		</div>
	</div>
{/if}

<!-- keep local to this file for right now -->
<style lang="postcss">
	.page-two-col {
		@apply grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] mx-auto container gap-2;
	}
	h2 {
		@apply text-primary-500;
	}
	.page-col {
		@apply p-2;
	}
</style>
