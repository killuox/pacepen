<script>
	import Header from '../../components/layout/Header.svelte';
</script>

<div
	class="h-screen dark:bg-pen-900 w-full grid grid-rows-[auto,1fr] text-pen-900 dark:text-white border-pen-900 dark:border-white"
>
	<Header />
	<slot />
</div>
