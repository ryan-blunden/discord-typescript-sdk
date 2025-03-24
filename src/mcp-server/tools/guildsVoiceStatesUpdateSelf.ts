/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsVoiceStatesUpdateSelf } from "../../funcs/guildsVoiceStatesUpdateSelf.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateSelfVoiceStateRequest$inboundSchema,
};

export const tool$guildsVoiceStatesUpdateSelf: ToolDefinition<typeof args> = {
  name: "guilds-voice-states-update-self",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsVoiceStatesUpdateSelf(
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
