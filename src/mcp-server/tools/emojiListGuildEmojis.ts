/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { emojiListGuildEmojis } from "../../funcs/emojiListGuildEmojis.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGuildEmojisRequest$inboundSchema,
};

export const tool$emojiListGuildEmojis: ToolDefinition<typeof args> = {
  name: "emoji-list-guild-emojis",
  description:
    `Returns a list of emoji objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.`,
  scopes: ["emoji", "read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await emojiListGuildEmojis(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
