import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createChat = mutation({
	args: {
		owner_email: v.string(),
		chat_name: v.string(),
		messages: v.array(
			v.object({
				_id: v.string(),
				created_by: v.string(),
				content: v.string(),
				created_at: v.string(),
			})
		),
	},
	handler: async (ctx, args) => {
		const chat_id = await ctx.db.insert("chats", { ...args });
		return chat_id;
	},
});

export const getChats = query({
	args: { ownerEmail: v.string() },
	handler: async (ctx, args) => {
		const { ownerEmail } = args;
		const requiredChats = await ctx.db
			.query("chats")
			.filter((q) => q.eq(q.field("owner_email"), ownerEmail))
			.collect();
		return requiredChats;
	},
});

export const getChatById = query({
	args: { chatId: v.id("chats") },
	handler: async (ctx, args) => {
		const { chatId } = args;
		const requiredChat = await ctx.db.get(chatId);
		return requiredChat;
	},
});

export const updateChatName = mutation({
	args: { chatId: v.id("chats"), newName: v.string() },
	handler: async (ctx, args) => {
		const { chatId, newName } = args;
		await ctx.db.patch(chatId, { chat_name: newName });
	},
});

export const deleteChat = mutation({
	args: { chatId: v.id("chats") },
	handler: async (ctx, args) => {
		const { chatId } = args;
		await ctx.db.delete(chatId);
	},
});
