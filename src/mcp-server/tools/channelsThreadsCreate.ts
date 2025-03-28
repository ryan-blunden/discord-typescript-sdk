/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsThreadsCreate } from "../../funcs/channelsThreadsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateThreadRequest$inboundSchema,
};

export const tool$channelsThreadsCreate: ToolDefinition<typeof args> = {
  name: "channels-threads-create",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsThreadsCreate(
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
