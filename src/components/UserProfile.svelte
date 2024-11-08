<script>
	import Avatar from "./Avatar.svelte";
	import Menu from "./Menu.svelte";

	let openMenu = $state(false);
</script>

<button onclick={() => (openMenu = true)} class="rounded-full w-fit h-fit">
	<Avatar username="John Doe" CLASS="size-10" />
</button>

{#if openMenu}
	<Menu bind:visibilityState={openMenu}>
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<div>
					<Avatar username="John Doe" CLASS="size-10" />
				</div>
				<span class="text-zinc-50 text-sm sm:text-base">John Doe</span>
				<span class="text-zinc-50 text-sm sm:text-base"
					>JohnDoe@example.com
				</span>
			</div>
			<button
				class="rounded-md border-2 border-green-600 text-green-600 px-2 py-1 hover:border-green-500 hover:text-green-500"
			>
				Log Out
			</button>
		</div>
	</Menu>
{/if}
