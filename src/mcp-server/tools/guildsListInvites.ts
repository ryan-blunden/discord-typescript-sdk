/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsListInvites } from "../../funcs/guildsListInvites.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGuildInvitesRequest$inboundSchema,
};

export const tool$guildsListInvites: ToolDefinition<typeof args> = {
  name: "guilds_list-invites",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsListInvites(
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
