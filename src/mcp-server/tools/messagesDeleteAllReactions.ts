/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesDeleteAllReactions } from "../../funcs/messagesDeleteAllReactions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteAllMessageReactionsRequest$inboundSchema,
};

export const tool$messagesDeleteAllReactions: ToolDefinition<typeof args> = {
  name: "messages-delete-all-reactions",
  description:
    `Deletes all reactions on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.`,
  scopes: ["messages", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await messagesDeleteAllReactions(
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
