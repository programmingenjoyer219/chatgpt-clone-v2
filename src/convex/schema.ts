import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string(),
	}),
	chats: defineTable({
		owner_email: v.string(),
		chat_name: v.string(),
		messages: v.array(
			v.object({
				m_id: v.string(),
				role: v.string(),
				content: v.string(),
				created_at: v.string(),
			})
		),
	}),
});
