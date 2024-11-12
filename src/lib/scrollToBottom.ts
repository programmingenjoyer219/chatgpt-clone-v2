export function scrollToBottom(scrollHeight: number) {
	window.scrollTo({
		top: scrollHeight,
		behavior: "smooth",
	});
}
