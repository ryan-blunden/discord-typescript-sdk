import { usersListGuilds } from "../../funcs/usersListGuilds.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListMyGuildsRequest$inboundSchema,
};

export const tool$usersListGuilds: ToolDefinition<typeof args> = {
  name: "users-list-guilds",
  description: `Returns a list of partial guild objects the current user is a member of.`,
  scopes: ["users", "read"],
  args,
  tool: async (client, args, ctx) => {
    const botToken =
      typeof client._options.botToken === "function"
        ? await client._options.botToken()
        : client._options.botToken;
    const [result, apiCall] = await usersListGuilds(
      client,
      {
        botToken: botToken,
      },
      args.request,
      { fetchOptions: { signal: ctx.signal } }
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
