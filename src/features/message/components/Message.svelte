<script lang="ts">
	interface Props {
		type: "prompt" | "response";
	}
	let { type }: Props = $props();
</script>

{#if type === "prompt"}
	<!-- prompt -->
	<div class="p-3 rounded-md bg-zinc-700">
		<div class="message-grid">
			<!-- avatar -->
			<div class="flex flex-col items-center justify-start">
				<img
					src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff"
					alt="John Doe"
					class="rounded-full"
				/>
			</div>
			<!-- content -->
			<div class="flex flex-col items-start">
				<p
					class="text-xs min-[425px]:text-sm sm:text-base text-zinc-200 leading-relaxed sm:leading-normal"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					quidem labore, numquam nesciunt sapiente impedit dolore pariatur eos
					explicabo qui quibusdam sint accusamus! Expedita vitae saepe
					perferendis, provident recusandae veniam.
				</p>
			</div>
		</div>
	</div>
{:else}
	<!-- response -->
	<div class="p-3 rounded-md">
		<div class="message-grid">
			<!-- avatar -->
			<div class="flex flex-col items-center justify-start">
				<i class="ri-openai-fill text-green-600 text-3xl"></i>
			</div>
			<!-- content -->
			<div class="flex flex-col items-start">
				<p
					class="text-xs min-[425px]:text-sm sm:text-base text-zinc-200 leading-relaxed sm:leading-normal"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
					quidem labore, numquam nesciunt sapiente impedit dolore pariatur eos
					explicabo qui quibusdam sint accusamus! Expedita vitae saepe
					perferendis, provident recusandae veniam.
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.message-grid {
		display: grid;
		grid-template-columns: 2rem auto;
		column-gap: 1rem;
	}
</style>
