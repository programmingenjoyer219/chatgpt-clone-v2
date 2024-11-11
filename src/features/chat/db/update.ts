import { api } from "$convex/_generated/api";
import type { Id } from "$convex/_generated/dataModel";
import { convexClientStore } from "$stores/convexClient.svelte";

export function editChatName(chatId: Id<"chats">, newName: string) {
	convexClientStore.value
		? convexClientStore.value.mutation(api.chats.updateChatName, {
				chatId,
				newName,
			})
		: console.error("convexClient not initialised");
}
