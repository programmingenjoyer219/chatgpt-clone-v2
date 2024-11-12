<script lang="ts">
	import "../app.css";
	import "remixicon/fonts/remixicon.css";
	import type { LayoutData } from "./$types";
	import type { Snippet } from "svelte";
	import LoginPage from "$components/LoginPage.svelte";
	import Sidebar from "$components/Sidebar.svelte";
	import SidebarToggleButton from "$components/SidebarToggleButton.svelte";
	import { userStore } from "$stores/user.svelte";
	import { PUBLIC_CONVEX_URL } from "$env/static/public";
	import { setupConvex, useQuery } from "convex-svelte";
	import { useConvexClient } from "convex-svelte";
	import { api } from "$convex/_generated/api";
	import { dbAddUser } from "$features/auth/db";
	import { convexClientStore } from "$stores/convexClient.svelte";

	interface Props {
		data: LayoutData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	userStore.value = data.session?.user ?? null;
	setupConvex(PUBLIC_CONVEX_URL);
	convexClientStore.value = useConvexClient();
	const dbGetUserQuery = useQuery(api.users.getUser, {
		email: userStore.value?.email ?? "",
	});

	$effect(() => {
		if (dbGetUserQuery.isLoading) return;
		if (dbGetUserQuery.error) {
			console.error("error fetching user from db");
			console.log(dbGetUserQuery.error);
			return;
		}
		if (dbGetUserQuery.data && dbGetUserQuery.data.length === 0) {
			if (userStore.value?.name && userStore.value.email) {
				console.log("adding user to db...");
				dbAddUser(userStore.value.name, userStore.value.email);
			} else {
				console.log("user session doesn't exist");
			}
		} else {
			console.log("user already exists");
		}
		console.log(dbGetUserQuery.data);
	});
</script>

<svelte:head>
	<title>ChatGPT Clone V2</title>
</svelte:head>

<main class="min-h-[100dvh] bg-zinc-800">
	{#if data.session}
		<Sidebar />
		<SidebarToggleButton />
		{@render children()}
	{:else}
		<LoginPage />
	{/if}
</main>
