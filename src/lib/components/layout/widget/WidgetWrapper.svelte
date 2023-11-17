<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let widget: string;

    $: widgetLabel = widget.charAt(0).toUpperCase() + widget.slice(1);
</script>

<Card.Root class="h-full">
	<Card.Header>
		<Card.Title>{widgetLabel}</Card.Title>
	</Card.Header>
	<Card.Content>
		<slot />
	</Card.Content>
</Card.Root>
