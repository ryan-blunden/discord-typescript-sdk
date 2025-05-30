/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsLeaveThread } from "../../funcs/channelsLeaveThread.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.LeaveThreadRequest$inboundSchema,
};

export const tool$channelsLeaveThread: ToolDefinition<typeof args> = {
  name: "channels-leave-thread",
  description:
    `Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.`,
  scopes: ["channels", "write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await channelsLeaveThread(
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
