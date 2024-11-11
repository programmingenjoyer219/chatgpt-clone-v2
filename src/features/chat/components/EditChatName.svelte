<script lang="ts">
	import Menu from "$components/Menu.svelte";
	import type { Id } from "$convex/_generated/dataModel";
	import { editChatName } from "../db/update";

	interface Props {
		chatId: Id<"chats">;
	}

	let { chatId }: Props = $props();

	let openMenu = $state(false);
	let newChatName = $state("");
	let formError = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		if (!newChatName.trim()) {
			formError = true;
			return;
		}
		editChatName(chatId, newChatName.trim());
		// TODO: toast notification - chat name updated successfully
		console.log("chat name updated successfully");
		newChatName = "";
		openMenu = false;
	}
</script>

<button
	onclick={() => (openMenu = true)}
	class="rounded-md border-2 border-green-600 text-green-600 px-2 py-1 hover:border-blue-500 hover:text-blue-500"
>
	<i class="ri-edit-line"></i>
	<span class="sr-only">edit chat name</span>
</button>

{#if openMenu}
	<Menu bind:visibilityState={openMenu}>
		<form
			onsubmit={handleSubmit}
			id="edit-chat-name"
			class="flex flex-col gap-4"
		>
			<label
				for="chat-name"
				class="text-zinc-200 text-center text-sm sm:text-base"
				>Edit chat name
			</label>
			{#if formError}
				<span class="text-red-500 text-center font-medium text-xs sm:text-sm">
					Please don't leave the field empty
				</span>
			{/if}
			<input
				bind:value={newChatName}
				type="text"
				placeholder="new chat name"
				id="chat-name"
				class="text-center text-sm sm:text-base rounded-md p-3 outline-none ring-2 ring-green-600 focus:ring-green-500 bg-zinc-800 text-zinc-50 w-full"
			/>
			<button
				type="submit"
				class="bg-green-600 hover:bg-green-500 text-zinc-50 p-3 rounded-md cursor-pointer"
			>
				Submit
			</button>
		</form>
	</Menu>
{/if}
