<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import LoginPage from '$components/LoginPage.svelte';
	import Sidebar from "$components/Sidebar.svelte";
	import SidebarToggleButton from "$components/SidebarToggleButton.svelte";
	import { userStore } from '$stores/user.svelte';

	interface Props {
		data: LayoutData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	userStore.value = data.session?.user ?? null;
</script>

<main class="min-h-[100dvh] bg-zinc-800">
	{#if data.session}
		<Sidebar />
		<SidebarToggleButton />
		{@render children()}
	{:else}
		<LoginPage />
	{/if}
</main>
