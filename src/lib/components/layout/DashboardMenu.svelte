<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { DateInput } from 'date-picker-svelte';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';
	import Icon from '../common/Icon.svelte';
	let date = new Date();
	let isClient = false;
	// check if client side
	if (typeof window !== 'undefined') {
		isClient = true;
	}
	const updateDate = (numOfDays: number) => {
		date = new Date(date.setDate(date.getDate() + numOfDays));
	};
</script>

<div class="border-b p-2 px-6 flex items-center justify-between">
	<h2 class="text-2xl">Default</h2>
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
	<Button href="/app/templates">Templates</Button>
</div>
