<script>
	import { page } from "$app/stores";
</script>

<section
	class="container mx-auto min-h-dvh grid place-content-center text-center gap-4 text-yellow-400"
>
	<div class="flex flex-col gap-1 sm:gap-3">
		{#if $page.status === 404}
			<i class="ri-robot-2-fill text-7xl sm:text-9xl"></i>
		{:else}
			<i class="ri-error-warning-fill text-7xl sm:text-9xl"></i>
		{/if}
		<h1 class="text-3xl sm:text-5xl font-bold">{$page.status}</h1>
		<p class="text-xl sm:text-3xl">{$page.error?.message}</p>
	</div>
</section>
