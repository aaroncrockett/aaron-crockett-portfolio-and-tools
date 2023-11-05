import {
	colorNames,
	tailwindColorScale,
	type ColorNames,
	type TailwindColorScale
} from '$lib/types';

const colorProps: {
	label: string;
	value: `var(--color-${ColorNames}-${TailwindColorScale})`;
}[] = [];

colorNames.forEach((colorName) => {
	return tailwindColorScale.forEach((colorShade) => {
		const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
		colorProps.push({
			label: `${colorLabel} ${colorShade}`,
			value: `var(--color-${colorName}-${colorShade})`
		});
	});
});

export const inputSettings = {
	colorProps: [
		{ label: 'Black', value: '0 0 0' },
		{ label: 'White', value: '255 255 255' },
		...colorProps
	],
	stops: [
		{ value: '50,100,200,300,400,500,600,700,800,900', label: 'All' },
		{ value: '500', label: 'Single' },
		{ value: '100,500,900', label: 'Three: High' },
		{ value: '300,500,700', label: 'Three: Mid' }
	],
	fonts: ['sans', 'serif', 'mono', 'system'],
	border: ['0px', '1px', '2px', '4px', '6px', '8px']
};

export const fontSettings: Record<string, string> = {
	sans: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
	serif: `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
	mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
	system: `system-ui`
};

export const swatchColorClassesMap = {
	all: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
	single: ['500'],
	'three-high-contrast': ['50', '500', '900'],
	'three-mid-range': ['300', '500', '700']
};

export const swatchColorClasses: Record<ColorNames, Record<TailwindColorScale, string>> = {
	primary: {
		50: 'bg-primary-50',
		100: 'bg-primary-100',
		200: 'bg-primary-200',
		300: 'bg-primary-300',
		400: 'bg-primary-400',
		500: 'bg-primary-500 text-on-primary-token fill-on-primary-token',
		600: 'bg-primary-600',
		700: 'bg-primary-700',
		800: 'bg-primary-800',
		900: 'bg-primary-900'
	},
	secondary: {
		50: 'bg-secondary-50',
		100: 'bg-secondary-100',
		200: 'bg-secondary-200',
		300: 'bg-secondary-300',
		400: 'bg-secondary-400',
		500: 'bg-secondary-500 text-on-secondary-token fill-on-secondary-token',
		600: 'bg-secondary-600',
		700: 'bg-secondary-700',
		800: 'bg-secondary-800',
		900: 'bg-secondary-900'
	},
	tertiary: {
		50: 'bg-tertiary-50',
		100: 'bg-tertiary-100',
		200: 'bg-tertiary-200',
		300: 'bg-tertiary-300',
		400: 'bg-tertiary-400',
		500: 'bg-tertiary-500 text-on-tertiary-token fill-on-tertiary-token',
		600: 'bg-tertiary-600',
		700: 'bg-tertiary-700',
		800: 'bg-tertiary-800',
		900: 'bg-tertiary-900'
	},
	quaternary: {
		50: 'bg-quaternary-50',
		100: 'bg-quaternary-100',
		200: 'bg-quaternary-200',
		300: 'bg-quaternary-300',
		400: 'bg-quaternary-400',
		500: 'bg-quaternary-500 text-on-quaternary-token fill-on-quaternary-token',
		600: 'bg-quaternary-600',
		700: 'bg-quaternary-700',
		800: 'bg-quaternary-800',
		900: 'bg-quaternary-900'
	},
	quinary: {
		50: 'bg-quinary-50',
		100: 'bg-quinary-100',
		200: 'bg-quinary-200',
		300: 'bg-quinary-300',
		400: 'bg-quinary-400',
		500: 'bg-quinary-500 text-on-quinary-token fill-on-quinary-token',
		600: 'bg-quinary-600',
		700: 'bg-quinary-700',
		800: 'bg-quinary-800',
		900: 'bg-quinary-900'
	},
	success: {
		50: 'bg-success-50',
		100: 'bg-success-100',
		200: 'bg-success-200',
		300: 'bg-success-300',
		400: 'bg-success-400',
		500: 'bg-success-500 text-on-success-token fill-on-success-token',
		600: 'bg-success-600',
		700: 'bg-success-700',
		800: 'bg-success-800',
		900: 'bg-success-900'
	},
	warning: {
		50: 'bg-warning-50',
		100: 'bg-warning-100',
		200: 'bg-warning-200',
		300: 'bg-warning-300',
		400: 'bg-warning-400',
		500: 'bg-warning-500 text-on-warning-token fill-on-warning-token',
		600: 'bg-warning-600',
		700: 'bg-warning-700',
		800: 'bg-warning-800',
		900: 'bg-warning-900'
	},
	error: {
		50: 'bg-error-50',
		100: 'bg-error-100',
		200: 'bg-error-200',
		300: 'bg-error-300',
		400: 'bg-error-400',
		500: 'bg-error-500 text-on-error-token fill-on-primary-token',
		600: 'bg-error-600',
		700: 'bg-error-700',
		800: 'bg-error-800',
		900: 'bg-error-900'
	},
	info: {
		50: 'bg-info-50',
		100: 'bg-info-100',
		200: 'bg-info-200',
		300: 'bg-info-300',
		400: 'bg-info-400',
		500: 'bg-info-500 text-on-info-token fill-on-primary-token',
		600: 'bg-info-600',
		700: 'bg-info-700',
		800: 'bg-info-800',
		900: 'bg-info-900'
	},
	neutral: {
		50: 'bg-neutral-50',
		100: 'bg-neutral-100',
		200: 'bg-neutral-200',
		300: 'bg-neutral-300',
		400: 'bg-neutral-400',
		500: 'bg-neutral-500 text-on-neutral-token fill-on-neutral-token',
		600: 'bg-neutral-600',
		700: 'bg-neutral-700',
		800: 'bg-neutral-800',
		900: 'bg-neutral-900'
	},
	'neutral-cool': {
		50: 'bg-neutral-cool-50',
		100: 'bg-neutral-cool-100',
		200: 'bg-neutral-cool-200',
		300: 'bg-neutral-cool-300',
		400: 'bg-neutral-cool-400',
		500: 'bg-neutral-cool-500 text-on-neutral-cool-token fill-on-neutral-cool-token',
		600: 'bg-neutral-cool-600',
		700: 'bg-neutral-cool-700',
		800: 'bg-neutral-cool-800',
		900: 'bg-neutral-cool-900'
	},
	'neutral-warm': {
		50: 'bg-neutral-warm-50',
		100: 'bg-neutral-warm-100',
		200: 'bg-neutral-warm-200',
		300: 'bg-neutral-warm-300',
		400: 'bg-neutral-warm-400',
		500: 'bg-neutral-warm-500 text-on-neutral-warm-token fill-on-neutral-warm-token',
		600: 'bg-neutral-warm-600',
		700: 'bg-neutral-warm-700',
		800: 'bg-neutral-warm-800',
		900: 'bg-neutral-warm-900'
	}
};
