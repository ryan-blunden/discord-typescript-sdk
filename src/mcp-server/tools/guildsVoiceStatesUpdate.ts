/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsVoiceStatesUpdate } from "../../funcs/guildsVoiceStatesUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateVoiceStateRequest$inboundSchema,
};

export const tool$guildsVoiceStatesUpdate: ToolDefinition<typeof args> = {
  name: "guilds-voice-states_update",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsVoiceStatesUpdate(
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
