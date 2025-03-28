/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsListMyPrivateArchivedThreads } from "../../funcs/channelsListMyPrivateArchivedThreads.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListMyPrivateArchivedThreadsRequest$inboundSchema,
};

export const tool$channelsListMyPrivateArchivedThreads: ToolDefinition<
  typeof args
> = {
  name: "channels-list-my-private-archived-threads",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsListMyPrivateArchivedThreads(
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
