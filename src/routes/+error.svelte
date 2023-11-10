
<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';

	function goHome() {
		goto('/');
	}
</script>

<div class="flex flex-col items-center justify-center h-screen space-y-4">
	<h1 class="text-4xl font-bold text-center text-pen-900">404: Ink-sufficient Connection Detected</h1>
	<span class="text-2xl font-smiebold text-center text-pen-900 w-1/2"> "It appears we're temporarily out of ink! Let's refill our creative reserves and get back on track. In the meantime, imagine giving your favorite pen a virtual pep talk. You've got this, pen!"</span>
	<Button on:click={goHome}>Go home</Button>
</div>
