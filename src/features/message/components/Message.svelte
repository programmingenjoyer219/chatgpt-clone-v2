<script lang="ts">
	import Avatar from "$components/Avatar.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		role: string;
		children: Snippet;
	}

	let { role, children }: Props = $props();
</script>

{#snippet message(role: string)}
	<div class="p-3 rounded-md {role === 'user' ? 'bg-zinc-700' : ''}">
		<div class="message-grid">
			<div class="flex flex-col items-center justify-start">
				{#if role === "user"}
					<Avatar />
				{:else}
					<i class="ri-openai-fill text-green-600 text-3xl"></i>
				{/if}
			</div>
			<!-- content -->
			<div
				class="prose prose-invert max-w-full prose-sm sm:prose-base overflow-x-auto text-zinc-200"
			>
				{@render children()}
			</div>
		</div>
	</div>
{/snippet}

{@render message(role)}

<style>
	.message-grid {
		display: grid;
		grid-template-columns: 2rem auto;
		column-gap: 1rem;
	}
</style>
