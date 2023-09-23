// Redis related
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';

let ratelimit: unknown = null;

export function setRateLimit() {
	const redis = new Redis({
		url: UPSTASH_REDIS_REST_URL,
		token: UPSTASH_REDIS_REST_TOKEN
	});
	ratelimit = new Ratelimit({
		redis,
		limiter: Ratelimit.slidingWindow(3, '1 m')
	});
}

export function getRateLimit() {
	return ratelimit;
}
