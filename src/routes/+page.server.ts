import { getRateLimit } from '$lib/server/ratelimit';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const ratelimit = getRateLimit();
		const rateLimitAttempt = await ratelimit.limit(event.getClientAddress());

		if (!rateLimitAttempt.success) {
			// const timeRemaining = Math.floor((rateLimitAttempt.reset - new Date().getTime()) / 1000);
			return fail(429, {
				error: `TEST lorum ipsum`
			});
		}
	}
};
