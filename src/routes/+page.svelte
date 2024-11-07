<script>
	import ScrollToBottom from "$components/ScrollToBottom.svelte";
	import Sidebar from "../components/Sidebar.svelte";
	import SidebarToggleButton from "../components/SidebarToggleButton.svelte";
	import PromptInput from "../features/ai/components/PromptInput.svelte";
	import Message from "../features/message/components/Message.svelte";
</script>

<Sidebar />
<SidebarToggleButton />
<div class="container mx-auto max-w-4xl p-4 min-h-screen">
	<div
		class="overflow-y-auto space-y-4 pt-[4rem] pb-[9rem] min-[985px]:pt-0 sm:space-y-6"
	>
		<Message type={"prompt"} />
		<Message type={"response"} />
	</div>

	<ScrollToBottom />
	<PromptInput />
</div>
