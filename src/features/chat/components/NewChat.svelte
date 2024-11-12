<script>
	import { goto } from "$app/navigation";
	import { userStore } from "$stores/user.svelte";
	import { createChat } from "../db/create";
	import toast from "svelte-french-toast";

	async function handleClick() {
		if (userStore.value?.email) {
			const chatId = await createChat(userStore.value?.email, "new chat");
			if (chatId) {
				toast.success("New chat created successfully", {
					position: "top-right",
				});
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
