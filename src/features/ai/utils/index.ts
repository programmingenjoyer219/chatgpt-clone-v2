import { PUBLIC_GEMINI_API_KEY } from "$env/static/public";
import type { formatChatHistory } from "$features/chat/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
	generationConfig: {
		candidateCount: 1,
		maxOutputTokens: 500,
		temperature: 1.0,
	},
});

export async function getResponseToPrompt(
	formattedChatHistory: ReturnType<typeof formatChatHistory>,
	prompt: string
) {
	const chat = model.startChat({ history: formattedChatHistory });
	const result = await chat.sendMessage(prompt);
	return result.response.text();
}
