<script lang="ts">
	import { scrollToBottom } from "$lib/scrollToBottom";

	interface Props {
		scrollHeight: number;
	}

	let { scrollHeight }: Props = $props();
</script>

<!-- scroll to bottom -->
<div class="fixed bottom-[7rem] left-0 right-0 flex justify-center">
	<button
		onclick={() => scrollToBottom(scrollHeight)}
		class="px-3 py-2 rounded-md bg-green-600 hover:bg-green-500"
	>
		<i class="ri-arrow-down-line text-zinc-50 text-lg sm:text-2xl"></i>
		<span class="sr-only">scroll to bottom</span>
	</button>
</div>
