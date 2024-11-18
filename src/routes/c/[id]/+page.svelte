<script lang="ts">
  import ScrollToBottom from "$components/ScrollToBottom.svelte";
  import { api } from "$convex/_generated/api";
  import PromptInput from "$features/ai/components/PromptInput.svelte";
  import Message from "$features/message/components/Message.svelte";
  import { useQuery } from "convex-svelte";
  import { page } from "$app/stores";
  import type { Id } from "$convex/_generated/dataModel";
  import { marked } from "marked";
  import { scrollToBottom } from "$lib/scrollToBottom";
  import toast from "svelte-french-toast";

  // Query to fetch a chat by its id from the database
  const getChatByIdQuery = $derived(
    useQuery(api.chats.getChatById, {
      chatId: ($page.params?.id as Id<"chats">) ?? "",
    })
  );
  // `messages` will be used by the AI model to generate chat-relevant responses
  let messages = $derived(getChatByIdQuery.data?.messages);
  // `queryIsLoading` describes the loading state of the query
  let queryIsLoading = $derived(getChatByIdQuery.isLoading);
  // `queryError` describes errors related to query failure, if any
  let queryError = $derived(getChatByIdQuery.error);
  /*
  `chatContainer` references `div#chat-container`, it will be used to scroll to bottom
  whenever a new message is created in the chat or user opens another chat
  */
  let chatContainer = $state<HTMLDivElement>();
  let scrollHeight = $derived.by(() => {
    return chatContainer ? chatContainer.scrollHeight : 0;
  });

  $effect(() => {
    messages && scrollToBottom(scrollHeight);
  });

  $effect(() => {
    queryError && toast("Failed to fetch messages");
  });
</script>

<div
  bind:this={chatContainer}
  id="chat-container"
  class="container mx-auto max-w-4xl p-4 min-h-dvh"
>
  <div
    class="overflow-y-auto space-y-4 pt-[4rem] pb-[9rem] min-[985px]:pt-0 sm:space-y-6"
  >
    {#if !queryIsLoading && !queryError && messages}
      {#if messages.length > 0}
        {#each messages as { m_id, role, content, created_at } (m_id)}
          <Message {role}>
            {@html marked(content)}
          </Message>
        {/each}
      {:else}
        <div class="text-green-500 text-center">
          <p class="text-xl">Enter a prompt to start using ChatGPT</p>
          <div class="py-4 grid place-content-center">
            <i class="ri-arrow-down-circle-fill text-3xl animate-bounce"></i>
          </div>
        </div>
      {/if}
    {/if}
  </div>

  <ScrollToBottom {scrollHeight} />
  <PromptInput
    chatHistory={messages}
    chatHistoryIsLoading={queryIsLoading}
    chatHistoryError={queryError}
  />
</div>
