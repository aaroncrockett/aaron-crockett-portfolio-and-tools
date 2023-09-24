import type { LayoutData } from './$types';

export const load: LayoutData = (data: LayoutData) => {
	const { route } = data;

	return { route };
};
