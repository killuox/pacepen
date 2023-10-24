<script lang="ts">
	import AppShell from '$lib/components/layout/AppShell.svelte';
</script>

<AppShell>
	<main class="overflow-auto">
		<slot />
	</main>
</AppShell>
