<script lang='ts'>
	import { Avatar } from 'flowbite-svelte';
	import DarkMode from '../common/DarkMode.svelte';
	let avatarClass = 'shadow-md';

</script>

<div class="py-4 px-6 flex justify-end items-center space-x-4">
	<Avatar src="https://picsum.photos/200" class={avatarClass} />
</div>
