/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsListPinnedMessages } from "../../funcs/channelsListPinnedMessages.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPinnedMessagesRequest$inboundSchema,
};

export const tool$channelsListPinnedMessages: ToolDefinition<typeof args> = {
  name: "channels-list-pinned-messages",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsListPinnedMessages(
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
