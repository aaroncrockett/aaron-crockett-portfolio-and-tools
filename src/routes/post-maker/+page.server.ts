import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(303, '/');
	}
	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name, website, avatar_url`)
		.eq('id', session.user.id)
		.single();
	return { session, profile };
};

export const actions = {
	update: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;

		const { error } = await supabase.from('posts').insert({ title });

		if (error) {
			return fail(500, {
				title,
				error: true
			});
		}
		return { success: true };
	}
};
