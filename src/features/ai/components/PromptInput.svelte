<script lang="ts">
	import { createMessage } from "$features/message/db/create";
	import { page } from "$app/stores";
	import type { Id } from "$convex/_generated/dataModel";
	import type { Message } from "$features/message/types";
	import { getResponseToPrompt } from "../utils";
	import { formatChatHistory } from "$features/chat/utils";
	import toast from "svelte-french-toast";

	interface Props {
		chatHistory: Message[] | undefined;
		chatHistoryIsLoading: boolean;
		chatHistoryError: Error | undefined;
	}

	let { chatHistory, chatHistoryIsLoading, chatHistoryError }: Props = $props();

	let prompt = $state("");
	let chatId = $derived($page.params.id);
	let timeoutId = $state<number>();

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const promptCopy = prompt;
		prompt = "";
		if (!promptCopy.trim() || !chatId) {
			return;
		}
		await createMessage(chatId as Id<"chats">, "user", promptCopy);
		toast.promise(
			handleResponseToPrompt(promptCopy),
			{
				loading: "Processing prompt...",
				success: "ChatGPT has responded",
				error: "Oops...something went wrong",
			},
			{ position: "top-right" }
		);
	}

	async function handleResponseToPrompt(prompt: string) {
		timeoutId && clearTimeout(timeoutId);
		if (!chatHistory || chatHistoryIsLoading || chatHistoryError) {
			timeoutId = setTimeout(() => handleResponseToPrompt(prompt), 500);
		} else {
			const response = await getResponseToPrompt(
				formatChatHistory(chatHistory),
				prompt
			);
			await createMessage(chatId as Id<"chats">, "model", response);
		}
	}
</script>

<!-- prompt input -->
<div class="fixed bottom-6 left-0 right-0">
	<div class="container mx-auto max-w-4xl px-4">
		<form
			onsubmit={handleSubmit}
			class="p-3 rounded-md bg-zinc-700 flex items-center gap-3 w-full"
		>
			<textarea
				bind:value={prompt}
				placeholder="What's on your mind?"
				rows="1"
				class="rounded-sm outline-none ring-2 ring-green-800 focus:ring-green-600 bg-transparent resize-none p-3 flex-1 text-zinc-50 text-xs min-[425px]:text-sm sm:text-base"
			></textarea>
			<button
				disabled={prompt.trim().length === 0}
				class="px-2 py-1 sm:py-2 sm:px-3 rounded-md bg-green-600 hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-75"
			>
				<i class="ri-send-plane-fill text-zinc-50 text-lg sm:text-2xl"></i>
				<span class="sr-only">submit prompt</span>
			</button>
		</form>
	</div>
</div>
