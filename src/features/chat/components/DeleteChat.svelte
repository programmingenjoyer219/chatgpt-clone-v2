<script lang="ts">
	import type { Id } from "$convex/_generated/dataModel";
	import { deleteChat } from "../db/delete";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	interface Props {
		chatId: Id<"chats">;
	}

	let { chatId }: Props = $props();

	function handleClick() {
		if ($page.params?.id === chatId) {
			goto("/");
		}
		deleteChat(chatId);
		// TODO: toast notification - chat deleted successfully
		console.log("chat deleted successfully");
	}
</script>

<button
	onclick={handleClick}
	class="rounded-md border-2 border-green-600 text-green-600 px-2 py-1 hover:border-red-500 hover:text-red-500"
>
	<i class="ri-delete-bin-line"></i>
	<span class="sr-only">delete chat</span>
</button>
