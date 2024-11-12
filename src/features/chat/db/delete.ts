import { api } from "$convex/_generated/api";
import type { Id } from "$convex/_generated/dataModel";
import { convexClientStore } from "$stores/convexClient.svelte";

export function deleteChat(chatId: Id<"chats">) {
	convexClientStore.value
		? convexClientStore.value.mutation(api.chats.deleteChat, { chatId })
		: console.error("failed to delete chat: convexClient not initialised");
}
