import { api } from "$convex/_generated/api";
import { convexClientStore } from "$stores/convexClient.svelte";

export function dbAddUser(name: string, email: string) {
	convexClientStore.value
		? convexClientStore.value.mutation(api.users.addUser, { name, email })
		: console.error("convexClient not initialised");
}
