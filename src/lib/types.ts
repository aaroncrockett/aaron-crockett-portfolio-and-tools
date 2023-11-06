export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

// -- Quiz

export type Question = {
	question: string;
	options: string[];
	correct: number[];
};

// -- Color Generator

export const colorNames = [
	'primary',
	'secondary',
	'tertiary',
	'quaternary',
	'quinary',
	'success',
	'info',
	'warning',
	'error',
	'neutral',
	'neutral-cool',
	'neutral-warm'
];

// export const colorSchemes = [
// 	'blank-slate',
// 	'triad',
// 	'triad-high-contrast',
// 	'triad-low-contrast',
// 	'split-complimentary',
// 	'analogous-triad',
// 	'analogous-quad',
// 	'analogous-quin',
// 	'analogous-triad-2',
// 	'analogous-quad-2',
// 	'analogous-quin-2'
// ];

export const colorSchemes = ['triad'];

export const additionalColorNames = ['info', 'warning', 'neutral', 'neutral-cool', 'neutral-warm'];

export type ColorNames = (typeof colorNames)[number];

export type AdditionalColorNames = (typeof additionalColorNames)[number];

export type ColorSchemes = (typeof colorSchemes)[number];

export interface ColorSettings {
	key: ColorNames;
	label: string;
	hex: string;
	rgb: string;
	on: string;
	stops: string;
}

export interface ColorsCollection {
	[key: ColorNames]: string | null;
}

export const tailwindColorScale = [
	'50',
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900'
] as const;

export type TailwindColorScale = (typeof tailwindColorScale)[number];

export interface ThemeOptionsCollection {
	colors: ColorSettings[];
	fontBase: string;
	fontSecondary: string;
	textColorLight: string;
	textColorDark: string;
	roundedBase: string;
	borderBase: string;
}
