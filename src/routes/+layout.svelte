<script lang="ts">
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	let { children } = $props();
</script>

<main class="min-h-[100dvh] bg-zinc-800">
	{@render children()}
</main>
