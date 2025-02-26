/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsMessagesCreateJson } from "../../funcs/channelsMessagesCreateJson.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateMessageJsonRequest$inboundSchema,
};

export const tool$channelsMessagesCreateJson: ToolDefinition<typeof args> = {
  name: "channels-messages_create-json",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsMessagesCreateJson(
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
