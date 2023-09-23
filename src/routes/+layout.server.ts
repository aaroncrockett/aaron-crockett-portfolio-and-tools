import type { LayoutServerLoad } from './$types';
import { building } from '$app/environment';

import { setRateLimit } from '$lib/server/ratelimit';

export const load: LayoutServerLoad = async () => {
	if (!building) {
		setRateLimit();
	}
};
