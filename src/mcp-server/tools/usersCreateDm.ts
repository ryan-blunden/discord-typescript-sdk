/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersCreateDm } from "../../funcs/usersCreateDm.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.CreatePrivateChannelRequest$inboundSchema,
};

export const tool$usersCreateDm: ToolDefinition<typeof args> = {
  name: "users-create-dm",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await usersCreateDm(
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
