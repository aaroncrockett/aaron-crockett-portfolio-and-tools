import { createEventDispatcher } from 'svelte';
import { writable } from 'svelte/store';

import { inview } from 'svelte-inview';

let rootMarginOpt = '-50px';

const isInView = writable(false);
const isMounted = writable(false);

let componentKey = '';
let dispatch = null;

export const useIsInViewMounted = (value: string, dispatch: any, options = { rootMargin: '' }) => {
	if (options && options.rootMargin) {
		rootMarginOpt = options.rootMargin;
	}

	const inViewOptions = { rootMarginOpt, unobserveOnEnter: true };
	componentKey = value;

	const unsubscribe = isInView.subscribe((value) => {
		dispatch('inview-complete', { value: componentKey });
	});

	return {
		isInView,
		isMounted,
		inViewOptions,
		destroy: () => {
			unsubscribe();
		}
	};
};
