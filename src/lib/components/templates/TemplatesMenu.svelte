<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, Pen, Eye } from 'phosphor-svelte';
	import Icon from '../common/Icon.svelte';
	let hoveredBtn: string = '';
	const tempTemplates = [
		{
			name: 'Default'
		},
		{
			name: 'Mood'
		}
	];
</script>

<div class="border-r p-2 px-4 space-y-8">
	<Button href="/app" variant="link">
		<Icon icon={ArrowLeft} cn="mr-2" />
		Back to dashboard
	</Button>
	<div class="flex flex-col space-y-2 items-start">
		{#each tempTemplates as template}
			<button
				class="flex items-center w-full p-4 hover:bg-pen-100 dark:hover:bg-pen-800/20 rounded-md text-start"
				on:mouseenter={() => (hoveredBtn = template.name)}
				on:mouseleave={() => (hoveredBtn = '')}
			>
				{template.name}
				{#if hoveredBtn === template.name}
					<div class="flex items-center ml-auto space-x-2">
						<Icon icon={Eye} cn={"hover:text-pen-800 dark:hover:text-pen-200"}/>
						<Icon icon={Pen} cn={"hover:text-pen-800 dark:hover:text-pen-200"}/>
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>
