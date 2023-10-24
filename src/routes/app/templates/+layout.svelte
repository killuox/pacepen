<script lang="ts">
	import TemplatesMenu from '$lib/components/templates/TemplatesMenu.svelte';
</script>

<div class="grid grid-cols-[200px,3fr] gap-4 h-full">
	<TemplatesMenu />
	<slot />
</div>
