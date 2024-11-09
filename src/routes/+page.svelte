<script>
	import ScrollToBottom from "$components/ScrollToBottom.svelte";
	import Sidebar from "$components/Sidebar.svelte";
	import SidebarToggleButton from "$components/SidebarToggleButton.svelte";
	import PromptInput from "$features/ai/components/PromptInput.svelte";
	import Message from "$features/message/components/Message.svelte";
</script>

<Sidebar />
<SidebarToggleButton />
<div class="container mx-auto max-w-4xl p-4 min-h-screen">
	<div
		class="overflow-y-auto space-y-4 pt-[4rem] pb-[9rem] min-[985px]:pt-0 sm:space-y-6"
	>
		<Message createdBy={"user"}>
			<p
				class="text-xs min-[425px]:text-sm sm:text-base text-zinc-200 leading-relaxed sm:leading-normal"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				quidem labore, numquam nesciunt sapiente impedit dolore pariatur eos
				explicabo qui quibusdam sint accusamus! Expedita vitae saepe
				perferendis, provident recusandae veniam.
			</p>
		</Message>
		<Message createdBy={"ai"}>
			<p
				class="text-xs min-[425px]:text-sm sm:text-base text-zinc-200 leading-relaxed sm:leading-normal"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				quidem labore, numquam nesciunt sapiente impedit dolore pariatur eos
				explicabo qui quibusdam sint accusamus! Expedita vitae saepe
				perferendis, provident recusandae veniam.
			</p>
		</Message>
	</div>

	<ScrollToBottom />
	<PromptInput />
</div>
