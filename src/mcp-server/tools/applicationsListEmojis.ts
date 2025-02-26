/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsListEmojis } from "../../funcs/applicationsListEmojis.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListApplicationEmojisRequest$inboundSchema,
};

export const tool$applicationsListEmojis: ToolDefinition<typeof args> = {
  name: "applications_list-emojis",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await applicationsListEmojis(
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
