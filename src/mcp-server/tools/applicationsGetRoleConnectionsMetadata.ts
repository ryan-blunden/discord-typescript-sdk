/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applicationsGetRoleConnectionsMetadata } from "../../funcs/applicationsGetRoleConnectionsMetadata.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetApplicationRoleConnectionsMetadataRequest$inboundSchema,
};

export const tool$applicationsGetRoleConnectionsMetadata: ToolDefinition<
  typeof args
> = {
  name: "applications-get-role-connections-metadata",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await applicationsGetRoleConnectionsMetadata(
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
