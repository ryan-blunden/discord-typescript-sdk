/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildVoiceRegionsList } from "../../funcs/guildVoiceRegionsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGuildVoiceRegionsRequest$inboundSchema,
};

export const tool$guildVoiceRegionsList: ToolDefinition<typeof args> = {
  name: "guild-voice-regions_list",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildVoiceRegionsList(
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
