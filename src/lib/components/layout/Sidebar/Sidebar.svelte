<script lang="ts">
	import { routes } from '../../../configs/routes';
	import Brand from '../../common/Brand.svelte';
	import Icon from '$lib/components/common/Icon.svelte';
	import { page } from '$app/stores';
</script>

<div
	class="h-full backdrop-blur border-r border-slate-800 bg-black/10 shadow-lg flex flex-col items-center p-4 transition-colors duration-200"
>
	<Brand />
	<div class="pt-8 space-y-4">
		{#each routes as route}
			<div class="relative">
				<a
					href={route.url}
					class={`${
						$page.url.pathname === route.url ? 'text-violet-500' : 'text-slate-600'
					} flex items-center space-x-2 hover:text-violet-600`}
				>
					{#if $page.url.pathname === route.url}
						<span class="absolute w-3 h-3 bg-violet-500 rounded-full -left-[30px]" />
					{/if}
					<Icon icon={route.icon} size={30} />
				</a>
			</div>
		{/each}
	</div>
</div>
