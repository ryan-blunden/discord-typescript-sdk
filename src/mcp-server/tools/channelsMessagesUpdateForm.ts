/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsMessagesUpdateForm } from "../../funcs/channelsMessagesUpdateForm.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateMessageFormRequest$inboundSchema,
};

export const tool$channelsMessagesUpdateForm: ToolDefinition<typeof args> = {
  name: "channels-messages_update-form",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsMessagesUpdateForm(
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
