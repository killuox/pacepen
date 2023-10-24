<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Header from '../layout/Header.svelte';
	export let time = 25;

	let minutes = time;
	let seconds = 0;
	let isRunning = false;
	let intervalId: ReturnType<typeof setInterval>;

	function startTimer() {
		isRunning = true;
		intervalId = setInterval(() => {
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(intervalId);
					isRunning = false;
				} else {
					minutes--;
					seconds = 59;
				}
			} else {
				seconds--;
			}
		}, 1000);
	}

	function stopTimer() {
		clearInterval(intervalId);
		isRunning = false;
	}

	function resetTimer() {
		clearInterval(intervalId);
		isRunning = false;
		minutes = time;
		seconds = 0;
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Pomodoro</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col items-center">
			<span class="relative flex h-3 w-3">
				<span
					class={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
						isRunning ? 'bg-green-400' : 'bg-red-400'
					}`}
				/>
				<span
					class={`relative inline-flex rounded-full h-3 w-3 ${
						isRunning ? 'bg-green-500' : 'bg-red-500'
					}`}
				/>
			</span>
			<h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
			{#if isRunning}
				<button on:click={stopTimer}>Stop</button>
			{:else}
				<button on:click={startTimer}>Start</button>
			{/if}
			<button on:click={resetTimer}>Reset</button>
		</div>
	</Card.Content>
</Card.Root>
