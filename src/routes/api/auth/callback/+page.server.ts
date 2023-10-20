import type {  PageServerLoad } from '../$types';
import {  redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const next = event.url.searchParams.get('next');

	if (!next) {
		throw redirect(302, '/login');
	}

	const session = await event.locals.getSession();

	if(session) {
		throw redirect(302, next);
	}
};