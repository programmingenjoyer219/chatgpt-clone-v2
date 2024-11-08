<script lang="ts">
	import Menu from "$components/Menu.svelte";

	let openMenu = $state(false);
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
		<form id="edit-chat-name" class="flex flex-col gap-4">
			<label
				for="chat-name"
				class="text-zinc-200 text-center text-sm sm:text-base"
				>Edit chat name</label
			>
			<input
				type="text"
				placeholder="new chat name"
				id="chat-name"
				class="text-center text-sm sm:text-base rounded-md p-3 outline-none ring-2 ring-green-600 focus:ring-green-500 bg-zinc-800 text-zinc-50 w-full"
			/>
			<button
				type="submit"
				class="bg-green-600 hover:bg-green-500 text-zinc-50 p-3 rounded-md cursor-pointer"
				>Submit</button
			>
		</form>
	</Menu>
{/if}
