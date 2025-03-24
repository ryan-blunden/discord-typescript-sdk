/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsGetEmoji } from "../../funcs/applicationsGetEmoji.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetApplicationEmojiRequest$inboundSchema,
};

export const tool$applicationsGetEmoji: ToolDefinition<typeof args> = {
  name: "applications-get-emoji",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await applicationsGetEmoji(
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
