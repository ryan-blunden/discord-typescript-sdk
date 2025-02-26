/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsEmojisDelete } from "../../funcs/applicationsEmojisDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteApplicationEmojiRequest$inboundSchema,
};

export const tool$applicationsEmojisDelete: ToolDefinition<typeof args> = {
  name: "applications-emojis_delete",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await applicationsEmojisDelete(
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
