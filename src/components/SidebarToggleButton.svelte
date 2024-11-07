<script lang="ts">
	import { toggleSidebar } from "$stores/sidebar.svelte";
</script>

<!-- sidebar toggle button -->
<button
	onclick={toggleSidebar}
	class="sidebar-toggle px-3 py-2 rounded-md bg-green-600 hover:bg-green-500 fixed top-4 left-4"
>
	<i class="ri-menu-2-line text-lg sm:text-xl text-zinc-50"></i>
	<span class="sr-only">toggle sidebar</span>
</button>
