import { api } from "$convex/_generated/api";
import type { Id } from "$convex/_generated/dataModel";
import { convexClientStore } from "$stores/convexClient.svelte";

export async function createMessage(
	chatId: Id<"chats">,
	role: string,
	content: string
) {
	convexClientStore.value
		? convexClientStore.value.mutation(api.messages.createMessage, {
				chatId,
				role,
				content,
			})
		: console.error("convexClient not initialised");
}
