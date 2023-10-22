import { House, TrendUp, Gear } from 'phosphor-svelte';
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
		label: 'Home',
		icon: House
	},
	{
		url: `${baseUrl}/analytics`,
		label: 'Analytics',
		icon: TrendUp
	},
];
