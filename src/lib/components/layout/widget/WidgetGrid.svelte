<script lang="ts">
	import Pomodoro from '$lib/components/widgets/pomodoro/Pomodoro.svelte';
    import { currentTemplate } from '$lib/stores/template';
	import type { SvelteComponent } from 'svelte';

    const templatesComponents = {
        pomodoro: Pomodoro,

    } as {
        [key: string]: typeof SvelteComponent;
    }

    $: formattedTemplateArea = $currentTemplate.area.reduce((acc, curr) => {
        const rowArea = curr.reduce((acc, curr) => {
            return acc + `${curr} `;
        }, '');

        return acc + `"${rowArea}" `;
    }, '');

    $: templateWidgets = $currentTemplate.area.flat().reduce((acc: string[], curr: string) => { // return only unique widgets
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
    
</script>

<div class="widget-area h-full" style="grid-template-areas: {formattedTemplateArea}">
    {#each templateWidgets as widget}
        <div class="{widget}" style="grid-area: {widget}">
            <svelte:component this={templatesComponents[widget]} />
        </div>
    {/each}
</div>

<style>
    .widget-area {
        display: grid;
        gap: 1rem;
    }

    .header {
        grid-area: header;
    }

    .pomodoro {
        grid-area: pomodoro;
    }

    .tasks {
        grid-area: tasks;
    }

    .notes {
        grid-area: notes;
    }

    .weather {
        grid-area: weather;
    }

    .news {
        grid-area: news;
    }

    .calendar {
        grid-area: calendar;
    }

    .quotes {
        grid-area: quotes;
    }
</style>