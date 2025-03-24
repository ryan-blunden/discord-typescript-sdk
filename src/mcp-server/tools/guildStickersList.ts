/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildStickersList } from "../../funcs/guildStickersList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGuildStickersRequest$inboundSchema,
};

export const tool$guildStickersList: ToolDefinition<typeof args> = {
  name: "guild-stickers-list",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildStickersList(
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
