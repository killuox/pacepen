<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { DateInput } from 'date-picker-svelte';
	import { CaretLeft, CaretRight, CaretDown, Gear, Image } from 'phosphor-svelte';
	import Icon from '../common/Icon.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { currentTemplate, templates, updateCurrentTemplate } from '$lib/stores/template';

	let date = new Date();
	let isClient = false;
	let popoverOpen = false;
	// check if client side
	if (typeof window !== 'undefined') {
		isClient = true;
	}
	const updateDate = (numOfDays: number) => {
		date = new Date(date.setDate(date.getDate() + numOfDays));
	};
</script>

<div class="border-b p-2 px-6 flex items-center justify-between">
	<Popover.Root bind:open={popoverOpen}>
		<Popover.Trigger>
			<Button variant="ghost" class="w-32 flex items-center rounded-md space-x-2">
				<h3 class="text-lg">{$currentTemplate.name}</h3>
				<Icon icon={CaretDown} />
			</Button>
		</Popover.Trigger>
		<Popover.Content class="w-32 space-y-2">
			{#each $templates as template}
				<button
					on:click={() => {
						updateCurrentTemplate(template);
						popoverOpen = false;
					}}
					class={`flex w-full items-center space-x-2 p-1 px-2 hover:bg-pen-100 dark:hover:bg-pen-800/20 rounded-md cursor-pointer {
						${template.isActive ? 'bg-pen-100 dark:bg-pen-800/20' : ''}`}
				>
					<span>{template.name}</span>
				</button>
			{/each}
		</Popover.Content>
	</Popover.Root>
	{#if isClient}
		<div class="relative flex items-center">
			<button
				on:click={() => {
					updateDate(-1);
				}}
			>
				<Icon icon={CaretLeft} cn={'cursor-pointer'} />
			</button>
			<span class="absolute left-1/2 transform -translate-x-1/2">
				{date.toLocaleDateString()}
			</span>
			<DateInput bind:value={date} format="dd/MM/yyyy" closeOnSelection />
			<button
				on:click={() => {
					updateDate(1);
				}}
			>
				<Icon icon={CaretRight} cn={'cursor-pointer'} />
			</button>
		</div>
	{/if}
	<div class="flex items-center space-x-1">
		<Button variant="ghost" size="icon">
			<Icon icon={Image} />
		</Button>
		<Button variant="ghost" size="icon">
			<Icon icon={Gear} />
		</Button>
	</div>
</div>
