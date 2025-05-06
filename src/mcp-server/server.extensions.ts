import { Register } from "./extensions.js";
import { tool$guildsListChannels } from "./custom-tools/guildsListChannels.js";
import { tool$usersListGuilds } from "./custom-tools/usersListGuilds.js";

export function registerMCPExtensions(register: Register): void {
  register.tool(tool$guildsListChannels);
  register.tool(tool$usersListGuilds);
}
