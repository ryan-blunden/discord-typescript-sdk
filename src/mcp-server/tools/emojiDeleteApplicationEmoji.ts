/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { emojiDeleteApplicationEmoji } from "../../funcs/emojiDeleteApplicationEmoji.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteApplicationEmojiRequest$inboundSchema,
};

export const tool$emojiDeleteApplicationEmoji: ToolDefinition<typeof args> = {
  name: "emoji-delete-application-emoji",
  description: `Delete the given emoji. Returns 204 No Content on success.`,
  scopes: ["emoji", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await emojiDeleteApplicationEmoji(
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
