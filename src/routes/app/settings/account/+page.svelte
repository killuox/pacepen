<script lang="ts">
	import type { PageData } from './$types';
	import ProfileForm from './ProfileForm.svelte';
	import EmailForm from './EmailForm.svelte';
	import PasswordForm from './PasswordForm.svelte';
	import { page } from '$app/stores'
	import toast from 'svelte-french-toast';
	import { Button } from "$lib/components/ui/button";
	export let data: PageData;

	// get search params reset-password
	const passwordReset =  $page.url.searchParams.get('reset-password');

	// show toast if password reset
	if (passwordReset) {
		toast.success('Please input your new password');
		//remove search params
		$page.url.searchParams.delete('reset-password');
	}
</script>

<div>
	<!-- Account Page Header -->
	<div class="mx-auto flex max-w-2xl flex-col items-center pb-20 text-center">
		<span class="mt-2 text-5xl font-bold">Account Settings</span>
		<span class="text-neutral-content mt-4 text-center text-lg leading-8">
			Manage your email, password, billing, and other account details.
		</span>
	</div>
	<div
		class="divide-surface-700 mx-auto max-w-xl space-y-16 divide-y divide-primary"
	>
		<!-- Current Plan & Billing Section -->
		<section class="px-6">
			<div class="flex items-center font-semibold">
				<span>Current Plan & Billing</span>
			</div>
			<p class="mt-3 max-w-none text-sm">Manage your current plan and billing details</p>
			<div class="mt-8">
				<div>
					Current Plan: <strong>{data.tier}</strong>
				</div>
				<Button class="mt-4" href="/app/settings/account/billing">Manage Billing</Button>
			</div>
		</section>
		<!-- Profile Section -->
		<ProfileForm data={data.profileForm} />
		<!-- Email Address Section -->
		<EmailForm data={data.emailForm} />
		<!-- Change Password Section -->
		<PasswordForm data={data.passwordForm} />
	</div>
</div>
