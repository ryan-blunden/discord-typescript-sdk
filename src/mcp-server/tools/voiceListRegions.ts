/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { voiceListRegions } from "../../funcs/voiceListRegions.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$voiceListRegions: ToolDefinition = {
  name: "voice-list-regions",
  description:
    `Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.`,
  scopes: ["voice", "read"],
  tool: async (client, ctx) => {
    const [result, apiCall] = await voiceListRegions(
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
