/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsCreate } from "../../funcs/guildsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.GuildCreateRequest$inboundSchema,
};

export const tool$guildsCreate: ToolDefinition<typeof args> = {
  name: "guilds-create",
  description:
    `Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.`,
  scopes: ["guilds", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsCreate(
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
