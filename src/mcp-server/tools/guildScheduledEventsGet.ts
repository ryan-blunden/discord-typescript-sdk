/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildScheduledEventsGet } from "../../funcs/guildScheduledEventsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetGuildScheduledEventRequest$inboundSchema,
};

export const tool$guildScheduledEventsGet: ToolDefinition<typeof args> = {
  name: "guild-scheduled-events-get",
  description:
    `Get a guild scheduled event. Returns a guild scheduled event object on success.`,
  scopes: ["guild-scheduled-event", "read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildScheduledEventsGet(
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
