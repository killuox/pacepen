<script lang="ts">
	export let src = 'https://picsum.photos/200';
	export let size = 40;
</script>

<div
	class="rounded-full overflow-hidden border border-pen-900 dark:border-white"
	style="width: {size}px; height: {size}px;"
>
	<img class="w-full h-full object-cover" {src} alt="Avatar" />
</div>
