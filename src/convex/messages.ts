import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createMessage = mutation({
	args: { chatId: v.id("chats"), role: v.string(), content: v.string() },
	handler: async (ctx, args) => {
		const { chatId, role, content } = args;
		const message = {
			m_id: Math.random().toString(16).slice(2),
			role,
			content,
			created_at: new Date().toString(),
		};
		const chat = await ctx.db.get(chatId);
		await ctx.db.patch(chatId, {
			messages: [...(chat?.messages ?? []), message],
		});
	},
});
