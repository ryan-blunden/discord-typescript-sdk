/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { invitesRevoke } from "../../funcs/invitesRevoke.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.InviteRevokeRequest$inboundSchema,
};

export const tool$invitesRevoke: ToolDefinition<typeof args> = {
  name: "invites-revoke",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await invitesRevoke(
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
