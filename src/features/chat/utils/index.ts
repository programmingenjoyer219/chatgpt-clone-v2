import type { Message } from "$features/message/types";

export function formatChatHistory(chatHistory: Message[]) {
	return chatHistory.map((m) => ({
		role: m.role,
		parts: [{ text: m.content }],
	}));
}
