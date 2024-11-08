<script lang="ts">
	interface Props {
		username: string;
		CLASS?: string;
	}

	let { username, CLASS = "" }: Props = $props();
</script>

<img
	src="https://ui-avatars.com/api/?name={username}&background=10b981&color=fff"
	alt={username}
	class="rounded-full border-2 border-green-500 {CLASS}"
/>
