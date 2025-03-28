/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { scheduledEventsCreate } from "../../funcs/scheduledEventsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateGuildScheduledEventRequest$inboundSchema,
};

export const tool$scheduledEventsCreate: ToolDefinition<typeof args> = {
  name: "scheduled-events-create",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await scheduledEventsCreate(
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
