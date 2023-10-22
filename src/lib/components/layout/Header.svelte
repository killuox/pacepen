<script lang="ts">
	import Avatar from '../common/Avatar.svelte';
	import Brand from '../common/Brand.svelte';
	import DarkMode from '../common/DarkMode.svelte';
	import { routes } from '$lib/configs/routes';
	import { page } from '$app/stores';
</script>

<div class="flex justify-between space-x-4 border-b border-pen-900 dark:border-white">
	<div class="border-r border-pen-900 dark:border-white py-2 px-6">
		<Brand />
	</div>
	<div class="flex items-center space-x-4">
		{#each routes as route}
			<div class="relative">
				<a
					href={route.url}
					class="py-2 px-6 hover:text-pen-900 hover:dark:text-white {$page.url.pathname ===
					route.url
						? 'text-pen-900 dark:text-white'
						: 'text-pen-500 dark:text-pen-400'}"
				>
					{route.label}
				</a>
				{#if $page.url.pathname === route.url}
					<div
						class="absolute -bottom-4 left-1/2 w-3/4 h-1 bg-pen-900 dark:bg-white rounded transform -translate-x-1/2"
					/>
				{/if}
			</div>
		{/each}
	</div>
	<div class="flex items-center py-2 px-6">
		<DarkMode />
		<a href="/app/settings/account">
			<Avatar />
		</a>
	</div>
</div>
