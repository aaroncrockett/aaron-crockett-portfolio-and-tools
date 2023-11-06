export function getLuminance(r: Rgb): number;
export function getLuminance(r: number, g: number, b: number): number;
export function getLuminance(r: number | Rgb, g?: number, b?: number) {
	const { _r, _g, _b } =
		typeof r === 'object' ? { _r: r.r, _g: r.g, _b: r.b } : { _r: r, _g: g, _b: b }; // I'm not really happy with this ternary, but it works
	// we can't use !_r shorthand here because 0 is a valid value
	if (_r === undefined || _g === undefined || _b === undefined)
		throw new Error('Invalid RGB value!');
	const a = [_r, _g, _b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function generateA11yOnColor(hex: string): '255 255 255' | '0 0 0' {
	const black = calculateRatio(hex, '#000000');
	const white = calculateRatio(hex, '#FFFFFF');
	return black < white ? '0 0 0' : '255 255 255';
}

export function destringRgb(rgbString: string): any {
	const rgb = rgbString.match(/(\d+),?\s*(\d+),?\s*(\d+)/); // matches "255, 255, 255" and "255 255 255"
	if (!rgb) throw new Error('Invalid RGB string!');
	return { r: parseInt(rgb[1], 10), g: parseInt(rgb[2], 10), b: parseInt(rgb[3], 10) };
}

// overload to specify that when there is no returnType, it will always return Rgb
export function handleStringColor(colorString: string): any;
export function handleStringColor(colorString: string, returnType: 'rgb'): Rgb;
export function handleStringColor(colorString: string, returnType: 'hex'): string;
export function handleStringColor(colorString: string, returnType?: 'hex' | 'rgb'): string | Rgb;
export function handleStringColor(
	colorString: string,
	returnType: 'hex' | 'rgb' = 'rgb'
): string | Rgb {
	// if it's a css variable
	if (colorString.includes('--')) {
		colorString = colorString.replace(/var\(|\)/g, ''); // grab just the variable name
		const cssVarHydrated = getComputedStyle(document.documentElement)
			.getPropertyValue(colorString)
			.trim();
		return handleStringColor(cssVarHydrated, returnType);
	}
	// if it has spaces, it's an rgb string
	if (colorString.includes(' ')) {
		const rgb = destringRgb(colorString);
		return returnType === 'hex' ? rgbToHex(rgb.r, rgb.g, rgb.b) : rgb;
	}

	// if it's a hex string
	if (colorString.includes('#')) {
		const rgb = hexToRgb(colorString);
		if (!rgb) return '(invalid)';
		return returnType === 'hex' ? colorString : rgb;
	}
	return colorString;
}

export function calculateRatio(luminance1: string | number, luminance2: string | number) {
	const lum1 =
		typeof luminance1 === 'string' ? getLuminance(handleStringColor(luminance1)) : luminance1;
	const lum2 =
		typeof luminance2 === 'string' ? getLuminance(handleStringColor(luminance2)) : luminance2;
	if (lum1 === undefined || lum2 === undefined) throw new Error('Luminance is undefined!');
	return lum1 > lum2 ? (lum2 + 0.05) / (lum1 + 0.05) : (lum1 + 0.05) / (lum2 + 0.05);
}

export function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function lighten(hex: string, intensity: number): string {
	const color = hexToRgb(`#${hex}`);

	if (!color) return '';

	const r = Math.round(color.r + (255 - color.r) * intensity);
	const g = Math.round(color.g + (255 - color.g) * intensity);
	const b = Math.round(color.b + (255 - color.b) * intensity);

	return rgbToHex(r, g, b);
}

export function darken(hex: string, intensity: number): string {
	const color = hexToRgb(hex);

	if (!color) return '';

	const r = Math.round(color.r * intensity);
	const g = Math.round(color.g * intensity);
	const b = Math.round(color.b * intensity);

	return rgbToHex(r, g, b);
}

export function hexToRgb(hex: string): any | null {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) return null;

	const [, r, g, b] = colorParts;

	return {
		r: parseInt(r, 16),
		g: parseInt(g, 16),
		b: parseInt(b, 16)
	} as any;
}

export function hexToTailwindRgbString(hex: string): string {
	const sanitizedHex = hex.replaceAll('##', '#');
	const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(sanitizedHex);

	if (!colorParts) return '(invalid)';

	const [, r, g, b] = colorParts;

	return `${parseInt(r, 16)} ${parseInt(g, 16)} ${parseInt(b, 16)}`;
}
