// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const portfolio: CustomThemeConfig = {
	name: 'portfolio',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base':
			"brandon-grotesque, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-family-heading':
			"brandon-grotesque, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-surface-900)',
		'--on-secondary': 'var(--color-surface-900)',
		'--on-tertiary': 'var(--color-surface-900)',
		'--on-success': 'var(--color-surface-900)',
		'--on-warning': 'var(--color-surface-900)',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #EF4953
		'--color-primary-50': '253 228 229', // #fde4e5
		'--color-primary-100': '252 219 221', // #fcdbdd
		'--color-primary-200': '251 210 212', // #fbd2d4
		'--color-primary-300': '249 182 186', // #f9b6ba
		'--color-primary-400': '244 128 135', // #f48087
		'--color-primary-500': '239 73 83', // #EF4953
		'--color-primary-600': '215 66 75', // #d7424b
		'--color-primary-700': '179 55 62', // #b3373e
		'--color-primary-800': '143 44 50', // #8f2c32
		'--color-primary-900': '117 36 41', // #752429
		// secondary | #8BBBE4
		'--color-secondary-50': '228 244 253', // #e4f4fd
		'--color-secondary-100': '219 240 252', // #dbf0fc
		'--color-secondary-200': '210 237 251', // #d2edfb
		'--color-secondary-300': '183 226 249', // #b7e2f9
		'--color-secondary-400': '128 204 245', // #80ccf5
		'--color-secondary-500': '74 182 240', // #4AB6F0
		'--color-secondary-600': '67 164 216', // #43a4d8
		'--color-secondary-700': '56 137 180', // #3889b4
		'--color-secondary-800': '44 109 144', // #2c6d90
		'--color-secondary-900': '36 89 118', // #245976
		// tertiary | #FFCB06
		'--color-tertiary-50': '255 247 218', // #fff7da
		'--color-tertiary-100': '255 245 205', // #fff5cd
		'--color-tertiary-200': '255 242 193', // #fff2c1
		'--color-tertiary-300': '255 234 155', // #ffea9b
		'--color-tertiary-400': '255 219 81', // #ffdb51
		'--color-tertiary-500': '255 203 6', // #FFCB06
		'--color-tertiary-600': '230 183 5', // #e6b705
		'--color-tertiary-700': '191 152 5', // #bf9805
		'--color-tertiary-800': '153 122 4', // #997a04
		'--color-tertiary-900': '125 99 3', // #7d6303
		// success | #ABD037
		'--color-success-50': '242 248 225', // #f2f8e1
		'--color-success-100': '238 246 215', // #eef6d7
		'--color-success-200': '234 243 205', // #eaf3cd
		'--color-success-300': '221 236 175', // #ddecaf
		'--color-success-400': '196 222 115', // #c4de73
		'--color-success-500': '171 208 55', // #ABD037
		'--color-success-600': '154 187 50', // #9abb32
		'--color-success-700': '128 156 41', // #809c29
		'--color-success-800': '103 125 33', // #677d21
		'--color-success-900': '84 102 27', // #54661b
		// warning | #EEA121
		'--color-warning-50': '252 241 222', // #fcf1de
		'--color-warning-100': '252 236 211', // #fcecd3
		'--color-warning-200': '251 232 200', // #fbe8c8
		'--color-warning-300': '248 217 166', // #f8d9a6
		'--color-warning-400': '243 189 100', // #f3bd64
		'--color-warning-500': '238 161 33', // #EEA121
		'--color-warning-600': '214 145 30', // #d6911e
		'--color-warning-700': '179 121 25', // #b37919
		'--color-warning-800': '143 97 20', // #8f6114
		'--color-warning-900': '117 79 16', // #754f10
		// error | #D52027
		'--color-error-50': '249 222 223', // #f9dedf
		'--color-error-100': '247 210 212', // #f7d2d4
		'--color-error-200': '245 199 201', // #f5c7c9
		'--color-error-300': '238 166 169', // #eea6a9
		'--color-error-400': '226 99 104', // #e26368
		'--color-error-500': '213 32 39', // #D52027
		'--color-error-600': '192 29 35', // #c01d23
		'--color-error-700': '160 24 29', // #a0181d
		'--color-error-800': '128 19 23', // #801317
		'--color-error-900': '104 16 19', // #681013
		// surface | #231F20
		'--color-surface-50': '222 221 222', // #deddde
		'--color-surface-100': '211 210 210', // #d3d2d2
		'--color-surface-200': '200 199 199', // #c8c7c7
		'--color-surface-300': '167 165 166', // #a7a5a6
		'--color-surface-400': '101 98 99', // #656263
		'--color-surface-500': '35 31 32', // #231F20
		'--color-surface-600': '32 28 29', // #201c1d
		'--color-surface-700': '26 23 24', // #1a1718
		'--color-surface-800': '21 19 19', // #151313
		'--color-surface-900': '17 15 16' // #110f10
	}
};
