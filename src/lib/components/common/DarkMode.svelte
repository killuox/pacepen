<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { storeTheme } from '$lib/stores/theme';
	import { Moon, Sun } from 'phosphor-svelte';
	import Icon from './Icon.svelte';
	const isDarkMode = writable($storeTheme === 'dark');

	function toggleDarkMode() {
		isDarkMode.update((value) => !value);
	}

	onMount(() => {
		const html = document.querySelector('html');

		isDarkMode.subscribe((value) => {
			html?.classList.toggle('dark', value);
			localStorage.setItem('theme', value ? 'dark' : 'light');
		});
	});
</script>

<button
	class="flex items-center justify-center rounded-full w-10 h-10"
	on:click={toggleDarkMode}
>
	{#if $isDarkMode}
		<Icon icon={Moon} />
	{:else}
		<Icon icon={Sun} />
	{/if}
</button>
