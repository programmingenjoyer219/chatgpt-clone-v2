<script lang="ts">
	import { userStore } from "$stores/user.svelte";

	interface Props {
		CLASS?: string;
	}

	let { CLASS = "" }: Props = $props();
</script>

<img
	src="https://ui-avatars.com/api/?name={userStore.value
		?.name}&background=10b981&color=fff"
	alt={userStore.value?.name}
	class="rounded-full border-2 border-green-500 {CLASS}"
/>
