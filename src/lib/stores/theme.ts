import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';
const onClient = typeof window !== 'undefined';

const hasStorageTheme = onClient && localStorage.getItem('color-theme') !== null;

const currentTheme = hasStorageTheme
	? (localStorage.getItem('color-theme') as Theme)
	: onClient && window.matchMedia('(prefers-color-scheme: dark)').matches
	? 'dark'
	: 'light';

export const storeTheme = writable(currentTheme);
