/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsListActiveThreads } from "../../funcs/guildsListActiveThreads.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetActiveGuildThreadsRequest$inboundSchema,
};

export const tool$guildsListActiveThreads: ToolDefinition<typeof args> = {
  name: "guilds-list-active-threads",
  description:
    `Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.`,
  scopes: ["guilds", "read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsListActiveThreads(
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
