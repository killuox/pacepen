
<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';

	function goHome() {
		goto('/');
	}
</script>

<div class="flex flex-col items-center justify-center h-screen space-y-4">
	<span class="text-2xl font-bold text-center text-gray-800">Page not found</span>
	<h1 class="text-3xl font-bold text-center text-gray-800">404</h1>
	<Button on:click={goHome}>Go home</Button>
</div>
