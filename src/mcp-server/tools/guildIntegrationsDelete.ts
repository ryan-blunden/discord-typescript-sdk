/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildIntegrationsDelete } from "../../funcs/guildIntegrationsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteGuildIntegrationRequest$inboundSchema,
};

export const tool$guildIntegrationsDelete: ToolDefinition<typeof args> = {
  name: "guild-integrations_delete",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildIntegrationsDelete(
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
