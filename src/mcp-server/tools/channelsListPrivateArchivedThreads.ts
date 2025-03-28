/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsListPrivateArchivedThreads } from "../../funcs/channelsListPrivateArchivedThreads.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPrivateArchivedThreadsRequest$inboundSchema,
};

export const tool$channelsListPrivateArchivedThreads: ToolDefinition<
  typeof args
> = {
  name: "channels-list-private-archived-threads",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsListPrivateArchivedThreads(
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
