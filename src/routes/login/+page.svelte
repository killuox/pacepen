<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Button } from '$lib/components/ui/button';
	import { superForm } from 'sveltekit-superforms/client';
	import Input from "$lib/components/ui/input/input.svelte";
	import type { PageData } from './$types';
	export let data: PageData;
	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="py-20">
	<div class="flex w-full flex-col items-center">
		<Card.Root>
			<Card.Header>
				<Card.Title>Login to your account</Card.Title>
			</Card.Header>
			<Card.Content class="grid gap-4 min-w-[350px]">
				<!-- Login Form -->
				<form method="POST" class="flex flex-col space-y-6" use:enhance>
					<label class="space-y-2" for="email">
						<span>Email</span>
						<Input type="email" name="email" bind:value={$form.email} />
						{#if $errors.email}
							<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
						{/if}
					</label>
					<label class="space-y-2" for="password">
						<span>Password</span>
						<Input type="password" name="password" bind:value={$form.password} />
						{#if $errors.password}
							<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
						{/if}
					</label>
					<Button type="submit" class="w-full">Login</Button>

					<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
						Don't have an account? <a
							href="/register"
							class="text-blue-700 hover:underline dark:text-blue-500">Sign up</a
						>
					</div>
					<a href="/forgot-password" class="text-blue-700 hover:underline dark:text-blue-500"
						>Forgot password?</a
					>
				</form>
			</Card.Content>
		</Card.Root>
	</div>
</div>
