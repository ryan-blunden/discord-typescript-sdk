/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stageInstancesUpdate } from "../../funcs/stageInstancesUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateStageInstanceRequest$inboundSchema,
};

export const tool$stageInstancesUpdate: ToolDefinition<typeof args> = {
  name: "stage-instances_update",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await stageInstancesUpdate(
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
