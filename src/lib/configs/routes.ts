import { House, Users, Tent, Book, Question, Gear } from 'phosphor-svelte';
import type { SvelteComponent } from 'svelte';

interface Route {
	url: string;
	label: string;
	icon: typeof SvelteComponent;
	items?: {
		url: string;
		label: string;
	}[];
}
const baseUrl = '/app';

export const routes: Route[] = [
	{
		url: `${baseUrl}`,
		label: 'Dashboard',
		icon: House
	},
	
	{
		url: `${baseUrl}/settings`,
		label: 'Settings',
		icon: Gear,
		items: [
			{
				url: `${baseUrl}/settings/account`,
				label: 'Account'
			}
		]
	}
];
