/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsListWebhooks } from "../../funcs/guildsListWebhooks.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetGuildWebhooksRequest$inboundSchema,
};

export const tool$guildsListWebhooks: ToolDefinition<typeof args> = {
  name: "guilds-list-webhooks",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsListWebhooks(
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
