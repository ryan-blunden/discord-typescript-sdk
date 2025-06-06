/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stickersCreateGuildSticker } from "../../funcs/stickersCreateGuildSticker.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateGuildStickerRequest$inboundSchema,
};

export const tool$stickersCreateGuildSticker: ToolDefinition<typeof args> = {
  name: "stickers-create-guild-sticker",
  description:
    `Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.`,
  scopes: ["stickers", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await stickersCreateGuildSticker(
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
