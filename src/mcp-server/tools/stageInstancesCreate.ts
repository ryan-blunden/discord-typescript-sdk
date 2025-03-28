/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stageInstancesCreate } from "../../funcs/stageInstancesCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateStageInstanceRequestBody$inboundSchema,
};

export const tool$stageInstancesCreate: ToolDefinition<typeof args> = {
  name: "stage-instances-create",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await stageInstancesCreate(
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
