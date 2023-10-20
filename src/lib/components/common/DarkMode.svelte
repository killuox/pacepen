<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';

	let btnClass =
		'text-pen-900 dark:text-white hover:bg-transparent dark:hover:bg-transparen rounded-lg text-xl p-2';
</script>

<DarkMode {btnClass} size="lg" />
