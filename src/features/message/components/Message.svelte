<script lang="ts">
	import Avatar from "$components/Avatar.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		type: "prompt" | "response";
		children: Snippet;
	}
	let { type, children }: Props = $props();
</script>

{#snippet message(type: "prompt" | "response")}
<div class="p-3 rounded-md {type === 'prompt' ? 'bg-zinc-700': ''}">
	<div class="message-grid">
		<div class="flex flex-col items-center justify-start">
			{#if type === "prompt"}
				<Avatar username="John Doe" />
			{:else}
				<i class="ri-openai-fill text-green-600 text-3xl"></i>
			{/if}
		</div>
		<!-- content -->
		<div class="flex flex-col items-start">
			{@render children()}
		</div>
	</div>
</div>
{/snippet}

{@render message(type)}

<style>
	.message-grid {
		display: grid;
		grid-template-columns: 2rem auto;
		column-gap: 1rem;
	}
</style>
