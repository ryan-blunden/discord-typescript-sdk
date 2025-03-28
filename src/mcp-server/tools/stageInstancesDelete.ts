/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stageInstancesDelete } from "../../funcs/stageInstancesDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteStageInstanceRequest$inboundSchema,
};

export const tool$stageInstancesDelete: ToolDefinition<typeof args> = {
  name: "stage-instances-delete",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await stageInstancesDelete(
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

    return formatResult(void 0, apiCall);
  },
};
