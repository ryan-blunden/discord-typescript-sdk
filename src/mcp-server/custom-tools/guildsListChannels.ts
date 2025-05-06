import { guildsListChannels } from "../../funcs/guildsListChannels.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListGuildChannelsRequest$inboundSchema,
};

export const tool$guildsListChannels: ToolDefinition<typeof args> = {
  name: "guilds-list-channels",
  description: `Returns a list of guild channel objects for a specific guild. Does not include threads.`,
  scopes: ["guilds", "read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await guildsListChannels(
      client,
      {
        botToken:
          typeof client._options.botToken === "function"
            ? await client._options.botToken()
            : client._options.botToken,
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
