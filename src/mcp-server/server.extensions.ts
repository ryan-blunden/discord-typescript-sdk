import { Register } from "./extensions.js";
import { tool$guildsListChannels } from "./custom-tools/guildsListChannels.js";
import { tool$usersListMyGuilds } from "./custom-tools/usersListMyGuilds.js";

export function registerMCPExtensions(register: Register): void {
  register.tool(tool$guildsListChannels);
  register.tool(tool$usersListMyGuilds);
}