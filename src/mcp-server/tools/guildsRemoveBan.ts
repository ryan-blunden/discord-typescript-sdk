/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsRemoveBan } from "../../funcs/guildsRemoveBan.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UnbanUserFromGuildRequest$inboundSchema,
};

export const tool$guildsRemoveBan: ToolDefinition<typeof args> = {
  name: "guilds-remove-ban",
  description:
    `Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.`,
  scopes: ["guilds", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsRemoveBan(
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

    return formatResult(void 0, apiCall);
  },
};
