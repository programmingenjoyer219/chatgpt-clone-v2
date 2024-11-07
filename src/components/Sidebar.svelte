<script>
	import Chat from "$features/chat/components/Chat.svelte";
	import NewChat from "$features/chat/components/NewChat.svelte";
	import UserProfile from "$features/chat/components/UserProfile.svelte";
	import { sidebarVisibility, toggleSidebar } from "$stores/sidebar.svelte";
</script>

<!-- sidebar -->
<div
	id="sidebar"
	class="w-[280px] fixed left-0 top-0 h-full z-10 transition-transform duration-200
	{sidebarVisibility.value ? 'sidebar-visibility' : ''}"
>
	<div class="flex flex-col gap-5 p-3 h-full bg-zinc-700 rounded-md">
		<!-- row-1 -->
		<div class="flex items-center justify-between">
			<UserProfile />
			<!-- close button -->
			<button
				onclick={toggleSidebar}
				class="sidebar-toggle px-2 py-1 rounded-md text-green-600 hover:text-green-500"
			>
				<i class="ri-close-line text-lg sm:text-xl"></i>
				<span class="sr-only">close sidebar</span>
			</button>
		</div>
		<!-- row-2 -->
		<NewChat />
		<!-- row-3 -->
		<div class="flex flex-col space-y-1 h-full overflow-y-auto">
			<Chat />
		</div>
	</div>
</div>

<style>
	.sidebar-visibility {
		transform: translateX(-100%);
	}
</style>
