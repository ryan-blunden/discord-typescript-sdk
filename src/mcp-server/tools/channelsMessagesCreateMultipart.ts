/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsMessagesCreateMultipart } from "../../funcs/channelsMessagesCreateMultipart.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateMessageMultipartRequest$inboundSchema,
};

export const tool$channelsMessagesCreateMultipart: ToolDefinition<typeof args> =
  {
    name: "channels-messages-create-multipart",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await channelsMessagesCreateMultipart(
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
