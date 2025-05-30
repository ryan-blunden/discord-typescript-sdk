/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { emojiDeleteGuildEmoji } from "../../funcs/emojiDeleteGuildEmoji.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteGuildEmojiRequest$inboundSchema,
};

export const tool$emojiDeleteGuildEmoji: ToolDefinition<typeof args> = {
  name: "emoji-delete-guild-emoji",
  description:
    `Delete the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.`,
  scopes: ["emoji", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await emojiDeleteGuildEmoji(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
