<script lang="ts">
	import Avatar from '../common/Avatar.svelte';
	import Brand from '../common/Brand.svelte';
	import DarkMode from '../common/DarkMode.svelte';
</script>

<div class="flex justify-between space-x-4 border-b border-pen-900">
	<div class="border-r border-pen-900 py-2 px-6">
		<Brand />
	</div>
	<div class="flex items-center py-2 px-6">
		<DarkMode />
		<Avatar />
	</div>
</div>
