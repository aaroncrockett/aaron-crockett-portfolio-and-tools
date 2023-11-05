export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

// Quiz
export type Question = {
	question: string;
	options: string[];
	correct: number[];
};

// Color Generator
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
] as const;

export type ColorNames = (typeof ColorNames)[number];

export interface ColorSettings {
	key: ColorNames;
	label: string;
	hex: string;
	rgb: string;
	on: string;
	stops: string;
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
