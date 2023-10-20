<script lang="ts">
	import AppShell from '$lib/components/layout/AppShell.svelte';
</script>

<AppShell>
	<main class="py-10 pr-10 overflow-auto">
		<slot />
	</main>
</AppShell>
