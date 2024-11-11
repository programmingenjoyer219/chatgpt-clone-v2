<script>
	import { goto } from "$app/navigation";
	import { userStore } from "$stores/user.svelte";
	import { createChat } from "../db/create";

	async function handleClick() {
		if (userStore.value?.email) {
			const chatId = await createChat(userStore.value?.email, "new chat");
			if (chatId) {
				// TODO: toast notification - new chat created
				console.log("new chat created successfully");
				goto(`/c/${chatId}`);
			} else {
				console.error("no chatId returned");
			}
		}
	}
</script>

<button
	onclick={handleClick}
	class="bg-green-600 hover:bg-green-500 text-zinc-50 p-2 rounded-md"
>
	<span class="font-medium">New chat</span>
	<i class="ri-add-fill text-lg sm:text-xl"></i>
</button>
