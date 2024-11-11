import { api } from "$convex/_generated/api";
import { convexClientStore } from "$stores/convexClient.svelte";

export async function createChat(ownerEmail: string, chatName: string) {
	let id = null;

	if (convexClientStore.value) {
		id = await convexClientStore.value.mutation(api.chats.createChat, {
			owner_email: ownerEmail,
			chat_name: chatName,
			messages: [],
		});
	} else {
		console.error("convexClient not initialised");
	}

	return id;
}
