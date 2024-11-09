<script lang="ts">
	import { SignIn } from "@auth/sveltekit/components";
</script>

<div
	class="container mx-auto min-h-dvh flex flex-col items-center justify-center"
>
	<div class="flex flex-col items-center gap-4 text-center">
		<h1 class="text-4xl sm:text-6xl font-bold text-green-500">ChatGPT</h1>
		<i class="ri-openai-fill text-green-500 text-9xl"></i>
		<SignIn>
			<div
				slot="submitButton"
				class="py-4 px-6 rounded-md bg-green-600 hover:bg-green-500 text-zinc-50 space-x-2"
			>
				<span class="text-lg font-medium">Login</span>
				<i class="ri-google-fill text-xl"></i>
			</div>
		</SignIn>
	</div>
</div>
