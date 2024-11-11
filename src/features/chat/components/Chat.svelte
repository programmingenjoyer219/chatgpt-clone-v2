<script lang="ts">
	import DeleteChat from "./DeleteChat.svelte";
	import EditChatName from "./EditChatName.svelte";
	import type { Id } from "$convex/_generated/dataModel";

	interface Props {
		chatName: string;
		chatId: Id<"chats">;
	}

	let { chatName, chatId }: Props = $props();
</script>

<!-- chat -->
<div class="flex items-center p-2 bg-zinc-800 rounded-md">
	<div class="flex-1 flex items-center">
		<a href="/c/{chatId}" class="flex-1">
			<span class="text-gray-50 text-sm sm:text-base">{chatName}</span>
		</a>
	</div>
	<div class="grid grid-cols-2 gap-1">
		<EditChatName {chatId} />
		<DeleteChat {chatId} />
	</div>
</div>
