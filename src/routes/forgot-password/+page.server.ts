import { z } from 'zod';
import { setError, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { ENV } from '$lib/server/env';

const forgotPasswordSchema = z.object({
	email: z.string().email('Please enter a valid email address')
});

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();

	return {
		session,
		form: superValidate(forgotPasswordSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, forgotPasswordSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error: authError } = await event.locals.supabase.auth.resetPasswordForEmail(
			form.data.email,
			{
				redirectTo: `${ENV.PUBLIC_BASE_URL}/api/auth/callback?next=/app/settings/account?reset-password=true`
			}
		);

		if (authError) {
			return fail(400, {
				form: setError(form, 'email', authError.message)
			});
		}

		return {
			form
		};
	}
};
