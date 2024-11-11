<script lang="ts">
	import ScrollToBottom from "$components/ScrollToBottom.svelte";
	import { api } from "$convex/_generated/api";
	import PromptInput from "$features/ai/components/PromptInput.svelte";
	import Message from "$features/message/components/Message.svelte";
	import { useQuery } from "convex-svelte";
	import { page } from "$app/stores";
	import type { Id } from "$convex/_generated/dataModel";

	const getChatByIdQuery = useQuery(api.chats.getChatById, {
		chatId: ($page.params?.id as Id<"chats">) ?? "",
	});

	let messages = $derived(getChatByIdQuery.data?.messages);
</script>

<div class="container mx-auto max-w-4xl p-4 min-h-dvh">
	<div
		class="overflow-y-auto space-y-4 pt-[4rem] pb-[9rem] min-[985px]:pt-0 sm:space-y-6"
	>
		{#if !getChatByIdQuery.isLoading && !getChatByIdQuery.error && messages}
			{#each messages as { m_id, role, content, created_at } (m_id)}
				<Message {role}>
					<p
						class="text-xs min-[425px]:text-sm sm:text-base text-zinc-200 leading-relaxed sm:leading-normal"
					>
						{content}
					</p>
				</Message>
			{/each}
		{/if}
	</div>

	<ScrollToBottom />
	<PromptInput />
</div>
