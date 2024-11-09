<script lang="ts">
	import Avatar from "$components/Avatar.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		createdBy: "user" | "ai";
		children: Snippet;
	}
	let { createdBy, children }: Props = $props();
</script>

{#snippet message(createdBy: "user" | "ai")}
<div class="p-3 rounded-md {createdBy === 'user' ? 'bg-zinc-700': ''}">
	<div class="message-grid">
		<div class="flex flex-col items-center justify-start">
			{#if createdBy === "user"}
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

{@render message(createdBy)}

<style>
	.message-grid {
		display: grid;
		grid-template-columns: 2rem auto;
		column-gap: 1rem;
	}
</style>
