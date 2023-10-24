<script lang="ts">
	import type { EmailSchema } from '$lib/schemas';
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms/index';
	export let data: SuperValidated<EmailSchema>;
	const { form, errors, enhance } = superForm(data);
</script>

<section class="px-6 pt-16">
	<div class="flex items-center font-semibold">
		<span>Email Address</span>
	</div>
	<p class="mt-3 max-w-none text-sm">Change the email associated with your account</p>
	<!-- Email Address Form -->
	<form method="POST" action="?/updateEmail" use:enhance class="mt-8">
		<label for="email" class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" bind:value={$form.email} />
			{#if $errors.email}
				<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
			{/if}
		</label>
		<Button type="submit" class="mt-4">Update Email</Button>
	</form>
</section>
