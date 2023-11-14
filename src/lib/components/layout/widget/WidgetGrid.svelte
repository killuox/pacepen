<script lang="ts">
	import Pomodoro from '$lib/components/widgets/pomodoro/Pomodoro.svelte';
    let test = "quotes";
</script>

<div class="widget-area h-full">
    <div style="grid-area: {test}">
        <Pomodoro />
    </div>
</div>

<style>
    .widget-area {
        display: grid;
        gap: 1rem;
        grid-template-areas:
            "pomodoro pomodoro header header header"
            "pomodoro pomodoro header header header"
            "tasks tasks tasks notes notes"
            "weather weather weather news news"
            "calendar calendar calendar quotes quotes";
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