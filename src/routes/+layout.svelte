<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Toaster } from 'svelte-french-toast';

	export let data: LayoutData;
	$: ({ session, supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => subscription.unsubscribe();
	});
</script>
<Toaster />
{#if !$page.url.pathname
	.split('/')
	.filter((item) => item !== '')
	.includes('app')}
	<div class="flex justify-between items-center p-4">
		<div class="flex space-x-2">
			{#if session}
				<a href="/app">Go to app</a>
				<span>{session.user.email}</span>

				<form action="/logout" method="POST">
					<button type="submit">Logout</button>
				</form>

				<a href="/pricing">Pricing</a>
			{:else}
				<a href="/login">Login</a>
				<a href="/register">Register</a>
			{/if}
		</div>
	</div>
{/if}
<slot />
