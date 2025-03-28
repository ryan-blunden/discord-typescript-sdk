/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsStartThreadFromMessage } from "../../funcs/channelsStartThreadFromMessage.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateThreadFromMessageRequest$inboundSchema,
};

export const tool$channelsStartThreadFromMessage: ToolDefinition<typeof args> =
  {
    name: "channels-start-thread-from-message",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await channelsStartThreadFromMessage(
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
