<script>
	import DeleteChat from "./DeleteChat.svelte";
	import EditChatName from "./EditChatName.svelte";
</script>

<!-- chat -->
<div class="flex items-center p-2 bg-zinc-800 rounded-md">
	<div class="flex-1">
		<span class="text-gray-50 text-sm sm:text-base">new chat</span>
	</div>
	<div class="grid grid-cols-2 gap-1">
		<EditChatName />
		<DeleteChat />
	</div>
</div>
