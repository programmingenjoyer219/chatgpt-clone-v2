<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    visibilityState: boolean;
  }

  let {children, visibilityState = $bindable(false)}: Props = $props();
</script>

<div
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				visibilityState = false;
			}
		}}
		class="fixed z-20 top-0 left-0 right-0 bottom-0 bg-black/50 cursor-default"
	>
		<div
			class="fixed z-30 w-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-md bg-zinc-800 ring-2 ring-zinc-500"
		>
			{@render children()}
		</div>
	</div>