<script lang="ts">
	import Pomodoro from '$lib/components/widgets/pomodoro/Pomodoro.svelte';
	import Todo from '$lib/components/widgets/todo/Todo.svelte';
	import { currentTemplate } from '$lib/stores/template';
	import type { SvelteComponent } from 'svelte';
	import WidgetWrapper from './WidgetWrapper.svelte';

	const templatesComponents = {
		pomodoro: Pomodoro,
		todo: Todo
	} as {
		[key: string]: typeof SvelteComponent;
	};

	$: formattedTemplateArea = $currentTemplate.area.reduce((acc, curr) => {
		const rowArea = curr.reduce((acc, curr) => {
			return acc + `${curr} `;
		}, '');

		return acc + `"${rowArea}" `;
	}, '');

	$: templateWidgets = $currentTemplate.area.flat().reduce((acc: string[], curr: string) => {
		// return only unique widgets
		if (!acc.includes(curr)) {
			acc.push(curr);
		}
		return acc;
	}, []);
</script>

<div class="grid gap-3 min-h-[calc(100vh-140px)]" style="grid-template-areas: {formattedTemplateArea}">
	{#each templateWidgets as widget}
		<div class={widget} style="grid-area: {widget}">
			<WidgetWrapper widget={widget}>
				<svelte:component this={templatesComponents[widget]} />
			</WidgetWrapper>
		</div>
	{/each}
</div>
