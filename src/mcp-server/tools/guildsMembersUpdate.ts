/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsMembersUpdate } from "../../funcs/guildsMembersUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateGuildMemberRequest$inboundSchema,
};

export const tool$guildsMembersUpdate: ToolDefinition<typeof args> = {
  name: "guilds-members-update",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsMembersUpdate(
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
