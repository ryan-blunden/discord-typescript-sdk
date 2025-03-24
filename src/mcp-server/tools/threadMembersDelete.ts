/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { threadMembersDelete } from "../../funcs/threadMembersDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteThreadMemberRequest$inboundSchema,
};

export const tool$threadMembersDelete: ToolDefinition<typeof args> = {
  name: "thread-members-delete",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await threadMembersDelete(
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
