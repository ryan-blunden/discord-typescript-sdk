/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { gatewayGetBot } from "../../funcs/gatewayGetBot.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$gatewayGetBot: ToolDefinition = {
  name: "gateway-get-bot",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await gatewayGetBot(
      client,
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
