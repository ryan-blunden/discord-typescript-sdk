# Discord TypeScript SDK

A type-safe SDK for building Node.js Discord bots and applications with the v10 Discord API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@ryan-blunden/discord-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Discord HTTP API (Preview): The Discord TypeScript SDK exposes the full capabilities of the v10 API, enabling you to build bots and applications that manage servers, channels, messages, interactions, and more.

The SDK is regularly updated to include the latest changes from the OpenAPI spec at https://github.com/discord/discord-api-spec/blob/main/specs/openapi.json


For more information about the API: [Discord Developer Documentation](https://discord.com/developers/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Discord TypeScript SDK](#discord-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @ryan.blunden/discord-sdk
```

### PNPM

```bash
pnpm add @ryan.blunden/discord-sdk
```

### Bun

```bash
bun add @ryan.blunden/discord-sdk
```

### Yarn

```bash
yarn add @ryan.blunden/discord-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Discord": {
      "command": "npx",
      "args": [
        "-y", "--package", "@ryan.blunden/discord-sdk",
        "--",
        "mcp", "start",
        "--bot-token", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Discord": {
      "command": "npx",
      "args": [
        "-y", "--package", "@ryan.blunden/discord-sdk",
        "--",
        "mcp", "start",
        "--bot-token", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @ryan.blunden/discord-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

For a full list of tools, see [MCP_SERVER_TOOLS.md](./docs/mcp/MCP_SERVER_TOOLS.md).

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name       | Type   | Scheme  | Environment Variable |
| ---------- | ------ | ------- | -------------------- |
| `botToken` | apiKey | API key | `DISCORD_BOT_TOKEN`  |

To authenticate with the API the `botToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe();

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.applications.uploadAttachment({}, {
    applicationId: "<value>",
    requestBody: {
      file: "<value>",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [applicationCommands](docs/sdks/applicationcommands/README.md)

* [list](docs/sdks/applicationcommands/README.md#list) - Fetch all global commands for your application.
* [bulkSet](docs/sdks/applicationcommands/README.md#bulkset) - Takes a list of application commands, overwriting the existing global command list for this application.
* [create](docs/sdks/applicationcommands/README.md#create) - Create a new global command. New global commands will be available in all guilds after 1 hour.
* [get](docs/sdks/applicationcommands/README.md#get) - Fetch a global command for your application.
* [delete](docs/sdks/applicationcommands/README.md#delete) - Delete a global command.
* [update](docs/sdks/applicationcommands/README.md#update) - Edit a global command. Updates will be available in all guilds after 1 hour.
* [listGuild](docs/sdks/applicationcommands/README.md#listguild) - Fetch all guild commands for your application for a specific guild.
* [bulkSetGuild](docs/sdks/applicationcommands/README.md#bulksetguild) - Takes a list of application commands, overwriting the existing command list for this application for the targeted guild.
* [createGuild](docs/sdks/applicationcommands/README.md#createguild) - Create a new guild command. New guild commands will be available in the guild immediately.
* [listGuildPermissions](docs/sdks/applicationcommands/README.md#listguildpermissions) - Fetches command permissions for all commands for your application in a guild.
* [getGuild](docs/sdks/applicationcommands/README.md#getguild) - Fetch a guild command for your application.
* [deleteGuild](docs/sdks/applicationcommands/README.md#deleteguild) - Delete a guild command.
* [updateGuild](docs/sdks/applicationcommands/README.md#updateguild) - Edit a guild command. Updates for guild commands will be available immediately.
* [getGuildPermissions](docs/sdks/applicationcommands/README.md#getguildpermissions) - Fetches command permissions for a specific command for your application in a guild.
* [setGuildPermissions](docs/sdks/applicationcommands/README.md#setguildpermissions) - Edits command permissions for a specific command for your application in a guild.

### [applicationRoleConnectionMetadata](docs/sdks/applicationroleconnectionmetadata/README.md)

* [list](docs/sdks/applicationroleconnectionmetadata/README.md#list) - Returns a list of application role connection metadata objects for the given application.
* [update](docs/sdks/applicationroleconnectionmetadata/README.md#update) - Updates and returns a list of application role connection metadata objects for the given application. An application can have a maximum of 5 metadata records.
* [deleteUserConnection](docs/sdks/applicationroleconnectionmetadata/README.md#deleteuserconnection) - Deletes the application role connection for the user.

### [applications](docs/sdks/applications/README.md)

* [getMe](docs/sdks/applications/README.md#getme) - Returns the application object associated with the requesting bot user.
* [updateSelf](docs/sdks/applications/README.md#updateself) - Edit properties of the app associated with the requesting bot user. Only properties that are passed will be updated. Returns the updated application object on success.
* [get](docs/sdks/applications/README.md#get) - Returns information about a specific application.
* [update](docs/sdks/applications/README.md#update) - Updates an application. Returns the updated application object on success.
* [getActivityInstance](docs/sdks/applications/README.md#getactivityinstance) - Returns a serialized activity instance, if it exists. Useful for preventing unwanted activity sessions.
* [uploadAttachment](docs/sdks/applications/README.md#uploadattachment) - Uploads an attachment for an application.
* [getGateway](docs/sdks/applications/README.md#getgateway) - Returns an object with a single valid WSS URL, which the client can use for connecting to Discord.
* [getBotGateway](docs/sdks/applications/README.md#getbotgateway) - Returns an object with the same information as Get Gateway, plus a shards key, containing the recommended number of shards to connect with.
* [getOAuth2Authorization](docs/sdks/applications/README.md#getoauth2authorization) - Returns info about the current authorization.
* [getOAuth2Me](docs/sdks/applications/README.md#getoauth2me) - Returns the OAuth2 application object associated with the requesting bot user.
* [getPublicKeys](docs/sdks/applications/README.md#getpublickeys) - Returns a list of public keys used for verifying signatures.
* [getOpenIDConnectUserInfo](docs/sdks/applications/README.md#getopenidconnectuserinfo) - Returns the user info for the current user.
* [partnerSDKUnmergeProvisionalAccount](docs/sdks/applications/README.md#partnersdkunmergeprovisionalaccount) - Unmerges a provisional account.
* [partnerSDKToken](docs/sdks/applications/README.md#partnersdktoken) - Gets a token for the partner SDK.

### [auditLogs](docs/sdks/auditlogs/README.md)

* [list](docs/sdks/auditlogs/README.md#list) - Returns an audit log object for the guild. Requires the VIEW_AUDIT_LOG permission.

### [autoModeration](docs/sdks/automoderation/README.md)

* [listRules](docs/sdks/automoderation/README.md#listrules) - Get a list of all rules currently configured for the guild. Returns a list of auto moderation rule objects for the given guild. This endpoint requires the MANAGE_GUILD permission.
* [createRule](docs/sdks/automoderation/README.md#createrule) - Create a new rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Create Gateway event.
* [getRule](docs/sdks/automoderation/README.md#getrule) - Get a single rule. Returns an auto moderation rule object. This endpoint requires the MANAGE_GUILD permission.
* [deleteRule](docs/sdks/automoderation/README.md#deleterule) - Delete a rule. Returns a 204 on success. Fires an Auto Moderation Rule Delete Gateway event.
* [updateRule](docs/sdks/automoderation/README.md#updaterule) - Modify an existing rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Update Gateway event.

### [channels](docs/sdks/channels/README.md)

* [get](docs/sdks/channels/README.md#get) - Returns a channel object for the given channel ID.
* [delete](docs/sdks/channels/README.md#delete) - Delete a channel, or close a private message. Requires the MANAGE_CHANNELS permission for the guild, or MANAGE_THREADS if the channel is a thread. Returns a channel object on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel was a thread).
* [update](docs/sdks/channels/README.md#update) - Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters.
* [follow](docs/sdks/channels/README.md#follow) - Follow an Announcement Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS permission in the target channel. Returns a followed channel object. Fires a Webhooks Update Gateway event for the target channel.
* [listInvites](docs/sdks/channels/README.md#listinvites) - Returns a list of invite objects (with invite metadata) for the channel.
* [createInvite](docs/sdks/channels/README.md#createinvite) - Create a new invite object for the channel.
* [startThreadFromMessage](docs/sdks/channels/README.md#startthreadfrommessage) - Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and a Message Update Gateway event.
* [setPermissionOverwrite](docs/sdks/channels/README.md#setpermissionoverwrite) - Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.
* [deletePermissionOverwrite](docs/sdks/channels/README.md#deletepermissionoverwrite) - Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.
* [listPinnedMessages](docs/sdks/channels/README.md#listpinnedmessages) - Returns all pinned messages in the channel as an array of message objects.
* [pinMessage](docs/sdks/channels/README.md#pinmessage) - Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.
* [unpinMessage](docs/sdks/channels/README.md#unpinmessage) - Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.
* [addGroupDMRecipient](docs/sdks/channels/README.md#addgroupdmrecipient) - Adds a recipient to a Group DM using their access token.
* [removeGroupDMRecipient](docs/sdks/channels/README.md#removegroupdmrecipient) - Removes a recipient from a Group DM.
* [listThreadMembers](docs/sdks/channels/README.md#listthreadmembers) - Returns array of thread member objects that are members of the thread.
* [joinThread](docs/sdks/channels/README.md#jointhread) - Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update and a Thread Create Gateway event.
* [leaveThread](docs/sdks/channels/README.md#leavethread) - Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
* [getThreadMember](docs/sdks/channels/README.md#getthreadmember) - Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.
* [addThreadMember](docs/sdks/channels/README.md#addthreadmember) - Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response if the member is successfully added or was already a member of the thread. Fires a Thread Members Update Gateway event.
* [removeThreadMember](docs/sdks/channels/README.md#removethreadmember) - Removes another member from a thread. Requires the MANAGE_THREADS permission, or the creator of the thread if it is a PRIVATE_THREAD. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
* [startThread](docs/sdks/channels/README.md#startthread) - Creates a new thread that is not connected to an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.
* [listPrivateArchivedThreads](docs/sdks/channels/README.md#listprivatearchivedthreads) - Returns archived threads in the channel that are of type PRIVATE_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires both the READ_MESSAGE_HISTORY and MANAGE_THREADS permissions.
* [listPublicArchivedThreads](docs/sdks/channels/README.md#listpublicarchivedthreads) - Returns archived threads in the channel that are public. When called on a GUILD_TEXT channel, returns threads of type PUBLIC_THREAD. When called on a GUILD_ANNOUNCEMENT channel returns threads of type ANNOUNCEMENT_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires the READ_MESSAGE_HISTORY permission.
* [searchThreads](docs/sdks/channels/README.md#searchthreads) - Search for threads in a channel.
* [triggerTypingIndicator](docs/sdks/channels/README.md#triggertypingindicator) - Post a typing indicator for the specified channel, which expires after 10 seconds. Returns a 204 empty response on success. Fires a Typing Start Gateway event.
* [listJoinedPrivateArchivedThreads](docs/sdks/channels/README.md#listjoinedprivatearchivedthreads) - Returns archived threads in the channel that are of type PRIVATE_THREAD, and the user has joined. Threads are ordered by their id, in descending order. Requires the READ_MESSAGE_HISTORY permission.


### [emoji](docs/sdks/emoji/README.md)

* [listApplicationEmojis](docs/sdks/emoji/README.md#listapplicationemojis) - Returns an object containing a list of emoji objects for the given application under the items key. Includes a user object for the team member that uploaded the emoji from the app's settings, or for the bot user if uploaded using the API.
* [createApplicationEmoji](docs/sdks/emoji/README.md#createapplicationemoji) - Create a new emoji for the application. Returns the new emoji object on success.
* [getApplicationEmoji](docs/sdks/emoji/README.md#getapplicationemoji) - Returns an emoji object for the given application and emoji IDs. Includes the user field.
* [deleteApplicationEmoji](docs/sdks/emoji/README.md#deleteapplicationemoji) - Delete the given emoji. Returns 204 No Content on success.
* [updateApplicationEmoji](docs/sdks/emoji/README.md#updateapplicationemoji) - Modify the given emoji. Returns the updated emoji object on success.
* [listGuildEmojis](docs/sdks/emoji/README.md#listguildemojis) - Returns a list of emoji objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
* [createGuildEmoji](docs/sdks/emoji/README.md#createguildemoji) - Create a new emoji for the guild. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.
* [getGuildEmoji](docs/sdks/emoji/README.md#getguildemoji) - Returns an emoji object for the given guild and emoji IDs. Includes the user field if the bot has the MANAGE_GUILD_EXPRESSIONS permission, or if the bot created the emoji and has the the CREATE_GUILD_EXPRESSIONS permission.
* [deleteGuildEmoji](docs/sdks/emoji/README.md#deleteguildemoji) - Delete the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.
* [updateGuildEmoji](docs/sdks/emoji/README.md#updateguildemoji) - Modify the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.

### [entitlements](docs/sdks/entitlements/README.md)

* [list](docs/sdks/entitlements/README.md#list) - Returns all entitlements for a given app, active and expired.
* [createTest](docs/sdks/entitlements/README.md#createtest) - Creates a test entitlement to a given SKU for a given guild or user. Discord will act as though that user or guild has entitlement to your premium offering. This endpoint returns a partial entitlement object.
* [get](docs/sdks/entitlements/README.md#get) - Returns an entitlement.
* [deleteTest](docs/sdks/entitlements/README.md#deletetest) - Deletes a currently-active test entitlement. Discord will act as though that user or guild no longer has entitlement to your premium offering. Returns 204 No Content on success.
* [consume](docs/sdks/entitlements/README.md#consume) - For One-Time Purchase consumable SKUs, marks a given entitlement for the user as consumed. The entitlement will have consumed: true when using List Entitlements. Returns a 204 No Content on success.

### [guilds](docs/sdks/guilds/README.md)

* [create](docs/sdks/guilds/README.md#create) - Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.
* [get](docs/sdks/guilds/README.md#get) - Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.
* [delete](docs/sdks/guilds/README.md#delete) - Delete a guild permanently. User must be owner. Returns 204 No Content on success. Fires a Guild Delete Gateway event.
* [update](docs/sdks/guilds/README.md#update) - Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.
* [listBans](docs/sdks/guilds/README.md#listbans) - Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.
* [getBan](docs/sdks/guilds/README.md#getban) - Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.
* [createBan](docs/sdks/guilds/README.md#createban) - Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.
* [removeBan](docs/sdks/guilds/README.md#removeban) - Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.
* [bulkBan](docs/sdks/guilds/README.md#bulkban) - Ban up to 200 users from a guild, and optionally delete previous messages sent by the banned users. Requires both the BAN_MEMBERS and MANAGE_GUILD permissions. Returns a 200 response on success, including the fields banned_users with the IDs of the banned users and failed_users with IDs that could not be banned or were already banned.
* [listChannels](docs/sdks/guilds/README.md#listchannels) - Returns a list of guild channel objects. Does not include threads.
* [createChannel](docs/sdks/guilds/README.md#createchannel) - Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.
* [updateChannelPositions](docs/sdks/guilds/README.md#updatechannelpositions) - Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.
* [listIntegrations](docs/sdks/guilds/README.md#listintegrations) - Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.
* [deleteIntegration](docs/sdks/guilds/README.md#deleteintegration) - Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.
* [listInvites](docs/sdks/guilds/README.md#listinvites) - Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.
* [listMembers](docs/sdks/guilds/README.md#listmembers) - Returns a list of guild member objects that are members of the guild.
* [updateCurrentMember](docs/sdks/guilds/README.md#updatecurrentmember) - Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.
* [searchMembers](docs/sdks/guilds/README.md#searchmembers) - Returns a list of guild member objects whose username or nickname starts with a provided string.
* [getMember](docs/sdks/guilds/README.md#getmember) - Returns a guild member object for the specified user.
* [addMember](docs/sdks/guilds/README.md#addmember) - Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.
* [removeMember](docs/sdks/guilds/README.md#removemember) - Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.
* [updateMember](docs/sdks/guilds/README.md#updatemember) - Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.
* [addMemberRole](docs/sdks/guilds/README.md#addmemberrole) - Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
* [removeMemberRole](docs/sdks/guilds/README.md#removememberrole) - Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
* [setMfaLevel](docs/sdks/guilds/README.md#setmfalevel) - Modify a guild's MFA level. Requires guild ownership. Returns the updated level on success. Fires a Guild Update Gateway event.
* [getOnboarding](docs/sdks/guilds/README.md#getonboarding) - Returns the Onboarding object for the guild.
* [updateOnboarding](docs/sdks/guilds/README.md#updateonboarding) - Modifies the onboarding configuration of the guild. Returns a 200 with the Onboarding object for the guild. Requires the MANAGE_GUILD and MANAGE_ROLES permissions.
* [getPreview](docs/sdks/guilds/README.md#getpreview) - Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be discoverable.
* [previewPrune](docs/sdks/guilds/README.md#previewprune) - Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions.
* [prune](docs/sdks/guilds/README.md#prune) - Begin a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions. Returns an object with one pruned key indicating the number of members that were removed in the prune operation. Fires multiple Guild Member Remove Gateway events.
* [listVoiceRegions](docs/sdks/guilds/README.md#listvoiceregions) - Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.
* [listRoles](docs/sdks/guilds/README.md#listroles) - Returns a list of role objects for the guild.
* [createRole](docs/sdks/guilds/README.md#createrole) - Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.
* [updateRolePositions](docs/sdks/guilds/README.md#updaterolepositions) - Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.
* [getRole](docs/sdks/guilds/README.md#getrole) - Returns a role object for the specified role.
* [deleteRole](docs/sdks/guilds/README.md#deleterole) - Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.
* [updateRole](docs/sdks/guilds/README.md#updaterole) - Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.
* [listActiveThreads](docs/sdks/guilds/README.md#listactivethreads) - Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.
* [getVanityUrl](docs/sdks/guilds/README.md#getvanityurl) - Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.
* [getWelcomeScreen](docs/sdks/guilds/README.md#getwelcomescreen) - Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.
* [updateWelcomeScreen](docs/sdks/guilds/README.md#updatewelcomescreen) - Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.
* [getWidgetSettings](docs/sdks/guilds/README.md#getwidgetsettings) - Returns a guild widget settings object. Requires the MANAGE_GUILD permission.
* [updateWidgetSettings](docs/sdks/guilds/README.md#updatewidgetsettings) - Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget settings object. Fires a Guild Update Gateway event.
* [getWidget](docs/sdks/guilds/README.md#getwidget) - Returns the widget for the guild. Fires an Invite Create Gateway event when an invite channel is defined and a new Invite is generated.
* [getWidgetPng](docs/sdks/guilds/README.md#getwidgetpng) - Returns a PNG image widget for the guild. Requires no permissions or authentication.

### [guildScheduledEvents](docs/sdks/guildscheduledevents/README.md)

* [list](docs/sdks/guildscheduledevents/README.md#list) - Returns a list of guild scheduled event objects for the given guild.
* [create](docs/sdks/guildscheduledevents/README.md#create) - Create a guild scheduled event in the guild. Returns a guild scheduled event object on success. Fires a Guild Scheduled Event Create Gateway event.
* [get](docs/sdks/guildscheduledevents/README.md#get) - Get a guild scheduled event. Returns a guild scheduled event object on success.
* [delete](docs/sdks/guildscheduledevents/README.md#delete) - Delete a guild scheduled event. Returns a 204 on success. Fires a Guild Scheduled Event Delete Gateway event.
* [update](docs/sdks/guildscheduledevents/README.md#update) - Modify a guild scheduled event. Returns the modified guild scheduled event object on success. Fires a Guild Scheduled Event Update Gateway event.
* [getUsers](docs/sdks/guildscheduledevents/README.md#getusers) - Get a list of guild scheduled event users subscribed to a guild scheduled event. Returns a list of guild scheduled event user objects on success. Guild member data, if it exists, is included if the with_member query parameter is set.

### [guildTemplates](docs/sdks/guildtemplates/README.md)

* [get](docs/sdks/guildtemplates/README.md#get) - Returns a guild template object for the given code.
* [createGuild](docs/sdks/guildtemplates/README.md#createguild) - Create a new guild based on a template. Returns a guild object on success. Fires a Guild Create Gateway event.
* [getNewMemberWelcome](docs/sdks/guildtemplates/README.md#getnewmemberwelcome) - Returns the welcome screen object for the guild.
* [list](docs/sdks/guildtemplates/README.md#list) - Returns an array of guild template objects. Requires the MANAGE_GUILD permission.
* [create](docs/sdks/guildtemplates/README.md#create) - Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns the created guild template object on success.
* [sync](docs/sdks/guildtemplates/README.md#sync) - Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission. Returns the guild template object on success.
* [delete](docs/sdks/guildtemplates/README.md#delete) - Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted guild template object on success.
* [update](docs/sdks/guildtemplates/README.md#update) - Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns the guild template object on success.

### [invites](docs/sdks/invites/README.md)

* [get](docs/sdks/invites/README.md#get) - Returns an invite object for the given code.
* [delete](docs/sdks/invites/README.md#delete) - Delete an invite. Requires the MANAGE_CHANNELS permission on the channel this invite belongs to, or MANAGE_GUILD to remove any invite across the guild. Returns an invite object on success.

### [lobbies](docs/sdks/lobbies/README.md)

* [createOrJoin](docs/sdks/lobbies/README.md#createorjoin) - Creates a new lobby or joins an existing one. Returns a lobby object on success.
* [create](docs/sdks/lobbies/README.md#create) - Creates a new lobby. Returns a lobby object on success.
* [get](docs/sdks/lobbies/README.md#get) - Returns the lobby object for the given id.
* [update](docs/sdks/lobbies/README.md#update) - Updates a lobby. Returns a lobby object on success.
* [connectToChannel](docs/sdks/lobbies/README.md#connecttochannel) - Connects a lobby to a channel.
* [leave](docs/sdks/lobbies/README.md#leave) - Removes the current user from the specified lobby. It is safe to call this even if the user is no longer a member of the lobby, but will fail if the lobby does not exist.
* [addMember](docs/sdks/lobbies/README.md#addmember) - Adds a user to a lobby.
* [removeMember](docs/sdks/lobbies/README.md#removemember) - Removes a user from a lobby.
* [sendMessage](docs/sdks/lobbies/README.md#sendmessage) - Sends a message to the lobby.

### [messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - Returns the messages for a channel. If operating on a guild channel, this endpoint requires the VIEW_CHANNEL permission to be present on the current user.
* [createJson](docs/sdks/messages/README.md#createjson) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
* [createForm](docs/sdks/messages/README.md#createform) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
* [createMultipart](docs/sdks/messages/README.md#createmultipart) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
* [bulkDelete](docs/sdks/messages/README.md#bulkdelete) - Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the MANAGE_MESSAGES permission.
* [get](docs/sdks/messages/README.md#get) - Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.
* [delete](docs/sdks/messages/README.md#delete) - Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission.
* [updateJson](docs/sdks/messages/README.md#updatejson) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
* [updateForm](docs/sdks/messages/README.md#updateform) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
* [updateMultipart](docs/sdks/messages/README.md#updatemultipart) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
* [crosspost](docs/sdks/messages/README.md#crosspost) - Crosspost a message in an Announcement Channel to following channels. This endpoint requires the SEND_MESSAGES permission, if the current user sent the message, or additionally the MANAGE_MESSAGES permission, for all other messages, to be present for the current user.
* [deleteAllReactions](docs/sdks/messages/README.md#deleteallreactions) - Deletes all reactions on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.
* [listReactionsByEmoji](docs/sdks/messages/README.md#listreactionsbyemoji) - Get a list of users that reacted with a specific emoji.
* [deleteAllReactionsForEmoji](docs/sdks/messages/README.md#deleteallreactionsforemoji) - Deletes all the reactions for a given emoji on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.
* [createReaction](docs/sdks/messages/README.md#createreaction) - Create a reaction for the message. This endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.
* [deleteOwnReaction](docs/sdks/messages/README.md#deleteownreaction) - Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
* [deleteUserReaction](docs/sdks/messages/README.md#deleteuserreaction) - Deletes another user's reaction. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.

### [polls](docs/sdks/polls/README.md)

* [getAnswerVoters](docs/sdks/polls/README.md#getanswervoters) - Get a list of users that voted for a specific answer in a poll.
* [expire](docs/sdks/polls/README.md#expire) - Immediately ends the poll. You cannot end polls from other users. Returns a message object. Fires a Message Update Gateway event.

### [soundboards](docs/sdks/soundboards/README.md)

* [sendSoundboardSound](docs/sdks/soundboards/README.md#sendsoundboardsound) - Sends a soundboard sound to a channel.
* [listGuildSoundboardSounds](docs/sdks/soundboards/README.md#listguildsoundboardsounds) - Returns a list of soundboard sound objects for the given guild.
* [createGuildSoundboardSound](docs/sdks/soundboards/README.md#createguildsoundboardsound) - Create a new soundboard sound for the guild. Returns the new soundboard sound object on success.
* [getGuildSoundboardSound](docs/sdks/soundboards/README.md#getguildsoundboardsound) - Returns a soundboard sound object for the given guild and sound IDs.
* [deleteGuildSoundboardSound](docs/sdks/soundboards/README.md#deleteguildsoundboardsound) - Delete a soundboard sound from a guild. Returns 204 No Content on success.
* [updateGuildSoundboardSound](docs/sdks/soundboards/README.md#updateguildsoundboardsound) - Update a soundboard sound in a guild. Returns the updated soundboard sound object on success.
* [getSoundboardDefaultSounds](docs/sdks/soundboards/README.md#getsoundboarddefaultsounds) - Returns a list of the default sounds available in the soundboard.

### [stageInstances](docs/sdks/stageinstances/README.md)

* [create](docs/sdks/stageinstances/README.md#create) - Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event. Requires the user to be a moderator of the Stage channel.
* [get](docs/sdks/stageinstances/README.md#get) - Gets the stage instance associated with the Stage channel, if it exists.
* [delete](docs/sdks/stageinstances/README.md#delete) - Deletes the Stage instance. Returns 204 No Content. Fires a Stage Instance Delete Gateway event. Requires the user to be a moderator of the Stage channel.
* [update](docs/sdks/stageinstances/README.md#update) - Updates fields of an existing Stage instance. Returns the updated Stage instance. Fires a Stage Instance Update Gateway event. Requires the user to be a moderator of the Stage channel.

### [stickers](docs/sdks/stickers/README.md)

* [listGuildStickers](docs/sdks/stickers/README.md#listguildstickers) - Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
* [createGuildSticker](docs/sdks/stickers/README.md#createguildsticker) - Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.
* [getGuildSticker](docs/sdks/stickers/README.md#getguildsticker) - Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
* [deleteGuildSticker](docs/sdks/stickers/README.md#deleteguildsticker) - Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.
* [updateGuildSticker](docs/sdks/stickers/README.md#updateguildsticker) - Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.
* [listPacks](docs/sdks/stickers/README.md#listpacks) - Returns a list of available sticker packs.
* [getPack](docs/sdks/stickers/README.md#getpack) - Returns a sticker pack object for the given sticker pack ID.
* [get](docs/sdks/stickers/README.md#get) - Returns a sticker object for the given sticker ID.

### [users](docs/sdks/users/README.md)

* [getCurrent](docs/sdks/users/README.md#getcurrent) - Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email if the user has one.
* [updateCurrent](docs/sdks/users/README.md#updatecurrent) - Modify the requester's user account settings. Returns a user object on success. Fires a User Update Gateway event.
* [getApplicationRoleConnection](docs/sdks/users/README.md#getapplicationroleconnection) - Returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
* [updateApplicationRoleConnection](docs/sdks/users/README.md#updateapplicationroleconnection) - Updates and returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
* [createDM](docs/sdks/users/README.md#createdm) - Create a new DM channel with a user. Returns a DM channel object (if one already exists, it will be returned instead).
* [listConnections](docs/sdks/users/README.md#listconnections) - Returns a list of connection objects. Requires the connections OAuth2 scope.
* [listGuilds](docs/sdks/users/README.md#listguilds) - Returns a list of partial guild objects the current user is a member of. For OAuth2, requires the guilds scope.
* [leaveGuild](docs/sdks/users/README.md#leaveguild) - Leave a guild. Returns a 204 empty response on success. Fires a Guild Delete Gateway event and a Guild Member Remove Gateway event.
* [getGuildMember](docs/sdks/users/README.md#getguildmember) - Returns a guild member object for the current user. Requires the guilds.members.read OAuth2 scope.
* [get](docs/sdks/users/README.md#get) - Returns a user object for a given user ID.

### [voice](docs/sdks/voice/README.md)

* [getCurrentUserState](docs/sdks/voice/README.md#getcurrentuserstate) - Returns the current user's voice state in the guild.
* [updateCurrentUserState](docs/sdks/voice/README.md#updatecurrentuserstate) - Updates the current user's voice state. Returns 204 No Content on success. Fires a Voice State Update Gateway event.
* [getUserState](docs/sdks/voice/README.md#getuserstate) - Returns the specified user's voice state in the guild.
* [updateUserState](docs/sdks/voice/README.md#updateuserstate) - Updates another user's voice state. Fires a Voice State Update Gateway event.
* [listRegions](docs/sdks/voice/README.md#listregions) - Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.

### [webhooks](docs/sdks/webhooks/README.md)

* [listForChannel](docs/sdks/webhooks/README.md#listforchannel) - Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.
* [create](docs/sdks/webhooks/README.md#create) - Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission. Fires a Webhooks Update Gateway event.
* [listForGuild](docs/sdks/webhooks/README.md#listforguild) - Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.
* [get](docs/sdks/webhooks/README.md#get) - Returns the new webhook object for the given id.
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a 204 No Content response on success. Fires a Webhooks Update Gateway event.
* [update](docs/sdks/webhooks/README.md#update) - Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook object on success. Fires a Webhooks Update Gateway event.
* [getWithToken](docs/sdks/webhooks/README.md#getwithtoken) - Same as above, except this call does not require authentication and returns no user in the webhook object.
* [deleteWithToken](docs/sdks/webhooks/README.md#deletewithtoken) - Same as above, except this call does not require authentication.
* [updateWithToken](docs/sdks/webhooks/README.md#updatewithtoken) - Same as above, except this call does not require authentication, does not accept a channel_id parameter in the body, and does not return a user in the webhook object.
* [executeGithub](docs/sdks/webhooks/README.md#executegithub) - Add a new webhook to your GitHub repo (in the repo's settings), and use this endpoint as the "Payload URL."
* [getOriginalMessage](docs/sdks/webhooks/README.md#getoriginalmessage) - Returns the initial webhook message.
* [deleteOriginalMessage](docs/sdks/webhooks/README.md#deleteoriginalmessage) - Deletes the initial webhook message.
* [updateOriginalMessageJson](docs/sdks/webhooks/README.md#updateoriginalmessagejson) - Edits the initial webhook message.
* [updateOriginalMessageForm](docs/sdks/webhooks/README.md#updateoriginalmessageform) - Edits the initial webhook message.
* [updateOriginalMessageMultipart](docs/sdks/webhooks/README.md#updateoriginalmessagemultipart) - Edits the initial webhook message.
* [getMessage](docs/sdks/webhooks/README.md#getmessage) - Returns a previously-sent webhook message from the same token. Returns a message object on success.
* [deleteMessage](docs/sdks/webhooks/README.md#deletemessage) - Deletes a message that was created by the webhook. Returns a 204 No Content response on success.
* [updateMessageJson](docs/sdks/webhooks/README.md#updatemessagejson) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
* [updateMessageForm](docs/sdks/webhooks/README.md#updatemessageform) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
* [updateMessageMultipart](docs/sdks/webhooks/README.md#updatemessagemultipart) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
* [executeSlack](docs/sdks/webhooks/README.md#executeslack) - Refer to Slack's documentation for more information. We do not support Slack's channel, icon_emoji, mrkdwn, or mrkdwn_in properties.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`applicationCommandsBulkSet`](docs/sdks/applicationcommands/README.md#bulkset) - Takes a list of application commands, overwriting the existing global command list for this application.
- [`applicationCommandsBulkSetGuild`](docs/sdks/applicationcommands/README.md#bulksetguild) - Takes a list of application commands, overwriting the existing command list for this application for the targeted guild.
- [`applicationCommandsCreate`](docs/sdks/applicationcommands/README.md#create) - Create a new global command. New global commands will be available in all guilds after 1 hour.
- [`applicationCommandsCreateGuild`](docs/sdks/applicationcommands/README.md#createguild) - Create a new guild command. New guild commands will be available in the guild immediately.
- [`applicationCommandsDelete`](docs/sdks/applicationcommands/README.md#delete) - Delete a global command.
- [`applicationCommandsDeleteGuild`](docs/sdks/applicationcommands/README.md#deleteguild) - Delete a guild command.
- [`applicationCommandsGet`](docs/sdks/applicationcommands/README.md#get) - Fetch a global command for your application.
- [`applicationCommandsGetGuild`](docs/sdks/applicationcommands/README.md#getguild) - Fetch a guild command for your application.
- [`applicationCommandsGetGuildPermissions`](docs/sdks/applicationcommands/README.md#getguildpermissions) - Fetches command permissions for a specific command for your application in a guild.
- [`applicationCommandsList`](docs/sdks/applicationcommands/README.md#list) - Fetch all global commands for your application.
- [`applicationCommandsListGuild`](docs/sdks/applicationcommands/README.md#listguild) - Fetch all guild commands for your application for a specific guild.
- [`applicationCommandsListGuildPermissions`](docs/sdks/applicationcommands/README.md#listguildpermissions) - Fetches command permissions for all commands for your application in a guild.
- [`applicationCommandsSetGuildPermissions`](docs/sdks/applicationcommands/README.md#setguildpermissions) - Edits command permissions for a specific command for your application in a guild.
- [`applicationCommandsUpdate`](docs/sdks/applicationcommands/README.md#update) - Edit a global command. Updates will be available in all guilds after 1 hour.
- [`applicationCommandsUpdateGuild`](docs/sdks/applicationcommands/README.md#updateguild) - Edit a guild command. Updates for guild commands will be available immediately.
- [`applicationRoleConnectionMetadataDeleteUserConnection`](docs/sdks/applicationroleconnectionmetadata/README.md#deleteuserconnection) - Deletes the application role connection for the user.
- [`applicationRoleConnectionMetadataList`](docs/sdks/applicationroleconnectionmetadata/README.md#list) - Returns a list of application role connection metadata objects for the given application.
- [`applicationRoleConnectionMetadataUpdate`](docs/sdks/applicationroleconnectionmetadata/README.md#update) - Updates and returns a list of application role connection metadata objects for the given application. An application can have a maximum of 5 metadata records.
- [`applicationsGet`](docs/sdks/applications/README.md#get) - Returns information about a specific application.
- [`applicationsGetActivityInstance`](docs/sdks/applications/README.md#getactivityinstance) - Returns a serialized activity instance, if it exists. Useful for preventing unwanted activity sessions.
- [`applicationsGetBotGateway`](docs/sdks/applications/README.md#getbotgateway) - Returns an object with the same information as Get Gateway, plus a shards key, containing the recommended number of shards to connect with.
- [`applicationsGetGateway`](docs/sdks/applications/README.md#getgateway) - Returns an object with a single valid WSS URL, which the client can use for connecting to Discord.
- [`applicationsGetMe`](docs/sdks/applications/README.md#getme) - Returns the application object associated with the requesting bot user.
- [`applicationsGetOAuth2Authorization`](docs/sdks/applications/README.md#getoauth2authorization) - Returns info about the current authorization.
- [`applicationsGetOAuth2Me`](docs/sdks/applications/README.md#getoauth2me) - Returns the OAuth2 application object associated with the requesting bot user.
- [`applicationsGetOpenIDConnectUserInfo`](docs/sdks/applications/README.md#getopenidconnectuserinfo) - Returns the user info for the current user.
- [`applicationsGetPublicKeys`](docs/sdks/applications/README.md#getpublickeys) - Returns a list of public keys used for verifying signatures.
- [`applicationsPartnerSDKToken`](docs/sdks/applications/README.md#partnersdktoken) - Gets a token for the partner SDK.
- [`applicationsPartnerSDKUnmergeProvisionalAccount`](docs/sdks/applications/README.md#partnersdkunmergeprovisionalaccount) - Unmerges a provisional account.
- [`applicationsUpdate`](docs/sdks/applications/README.md#update) - Updates an application. Returns the updated application object on success.
- [`applicationsUpdateSelf`](docs/sdks/applications/README.md#updateself) - Edit properties of the app associated with the requesting bot user. Only properties that are passed will be updated. Returns the updated application object on success.
- [`applicationsUploadAttachment`](docs/sdks/applications/README.md#uploadattachment) - Uploads an attachment for an application.
- [`auditLogsList`](docs/sdks/auditlogs/README.md#list) - Returns an audit log object for the guild. Requires the VIEW_AUDIT_LOG permission.
- [`autoModerationCreateRule`](docs/sdks/automoderation/README.md#createrule) - Create a new rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Create Gateway event.
- [`autoModerationDeleteRule`](docs/sdks/automoderation/README.md#deleterule) - Delete a rule. Returns a 204 on success. Fires an Auto Moderation Rule Delete Gateway event.
- [`autoModerationGetRule`](docs/sdks/automoderation/README.md#getrule) - Get a single rule. Returns an auto moderation rule object. This endpoint requires the MANAGE_GUILD permission.
- [`autoModerationListRules`](docs/sdks/automoderation/README.md#listrules) - Get a list of all rules currently configured for the guild. Returns a list of auto moderation rule objects for the given guild. This endpoint requires the MANAGE_GUILD permission.
- [`autoModerationUpdateRule`](docs/sdks/automoderation/README.md#updaterule) - Modify an existing rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Update Gateway event.
- [`channelsAddGroupDMRecipient`](docs/sdks/channels/README.md#addgroupdmrecipient) - Adds a recipient to a Group DM using their access token.
- [`channelsAddThreadMember`](docs/sdks/channels/README.md#addthreadmember) - Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response if the member is successfully added or was already a member of the thread. Fires a Thread Members Update Gateway event.
- [`channelsCreateInvite`](docs/sdks/channels/README.md#createinvite) - Create a new invite object for the channel.
- [`channelsDelete`](docs/sdks/channels/README.md#delete) - Delete a channel, or close a private message. Requires the MANAGE_CHANNELS permission for the guild, or MANAGE_THREADS if the channel is a thread. Returns a channel object on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel was a thread).
- [`channelsDeletePermissionOverwrite`](docs/sdks/channels/README.md#deletepermissionoverwrite) - Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.
- [`channelsFollow`](docs/sdks/channels/README.md#follow) - Follow an Announcement Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS permission in the target channel. Returns a followed channel object. Fires a Webhooks Update Gateway event for the target channel.
- [`channelsGet`](docs/sdks/channels/README.md#get) - Returns a channel object for the given channel ID.
- [`channelsGetThreadMember`](docs/sdks/channels/README.md#getthreadmember) - Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.
- [`channelsJoinThread`](docs/sdks/channels/README.md#jointhread) - Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update and a Thread Create Gateway event.
- [`channelsLeaveThread`](docs/sdks/channels/README.md#leavethread) - Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
- [`channelsListInvites`](docs/sdks/channels/README.md#listinvites) - Returns a list of invite objects (with invite metadata) for the channel.
- [`channelsListJoinedPrivateArchivedThreads`](docs/sdks/channels/README.md#listjoinedprivatearchivedthreads) - Returns archived threads in the channel that are of type PRIVATE_THREAD, and the user has joined. Threads are ordered by their id, in descending order. Requires the READ_MESSAGE_HISTORY permission.
- [`channelsListPinnedMessages`](docs/sdks/channels/README.md#listpinnedmessages) - Returns all pinned messages in the channel as an array of message objects.
- [`channelsListPrivateArchivedThreads`](docs/sdks/channels/README.md#listprivatearchivedthreads) - Returns archived threads in the channel that are of type PRIVATE_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires both the READ_MESSAGE_HISTORY and MANAGE_THREADS permissions.
- [`channelsListPublicArchivedThreads`](docs/sdks/channels/README.md#listpublicarchivedthreads) - Returns archived threads in the channel that are public. When called on a GUILD_TEXT channel, returns threads of type PUBLIC_THREAD. When called on a GUILD_ANNOUNCEMENT channel returns threads of type ANNOUNCEMENT_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires the READ_MESSAGE_HISTORY permission.
- [`channelsListThreadMembers`](docs/sdks/channels/README.md#listthreadmembers) - Returns array of thread member objects that are members of the thread.
- [`channelsPinMessage`](docs/sdks/channels/README.md#pinmessage) - Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.
- [`channelsRemoveGroupDMRecipient`](docs/sdks/channels/README.md#removegroupdmrecipient) - Removes a recipient from a Group DM.
- [`channelsRemoveThreadMember`](docs/sdks/channels/README.md#removethreadmember) - Removes another member from a thread. Requires the MANAGE_THREADS permission, or the creator of the thread if it is a PRIVATE_THREAD. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.
- [`channelsSearchThreads`](docs/sdks/channels/README.md#searchthreads) - Search for threads in a channel.
- [`channelsSetPermissionOverwrite`](docs/sdks/channels/README.md#setpermissionoverwrite) - Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.
- [`channelsStartThread`](docs/sdks/channels/README.md#startthread) - Creates a new thread that is not connected to an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.
- [`channelsStartThreadFromMessage`](docs/sdks/channels/README.md#startthreadfrommessage) - Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and a Message Update Gateway event.
- [`channelsTriggerTypingIndicator`](docs/sdks/channels/README.md#triggertypingindicator) - Post a typing indicator for the specified channel, which expires after 10 seconds. Returns a 204 empty response on success. Fires a Typing Start Gateway event.
- [`channelsUnpinMessage`](docs/sdks/channels/README.md#unpinmessage) - Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.
- [`channelsUpdate`](docs/sdks/channels/README.md#update) - Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters.
- [`emojiCreateApplicationEmoji`](docs/sdks/emoji/README.md#createapplicationemoji) - Create a new emoji for the application. Returns the new emoji object on success.
- [`emojiCreateGuildEmoji`](docs/sdks/emoji/README.md#createguildemoji) - Create a new emoji for the guild. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.
- [`emojiDeleteApplicationEmoji`](docs/sdks/emoji/README.md#deleteapplicationemoji) - Delete the given emoji. Returns 204 No Content on success.
- [`emojiDeleteGuildEmoji`](docs/sdks/emoji/README.md#deleteguildemoji) - Delete the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.
- [`emojiGetApplicationEmoji`](docs/sdks/emoji/README.md#getapplicationemoji) - Returns an emoji object for the given application and emoji IDs. Includes the user field.
- [`emojiGetGuildEmoji`](docs/sdks/emoji/README.md#getguildemoji) - Returns an emoji object for the given guild and emoji IDs. Includes the user field if the bot has the MANAGE_GUILD_EXPRESSIONS permission, or if the bot created the emoji and has the the CREATE_GUILD_EXPRESSIONS permission.
- [`emojiListApplicationEmojis`](docs/sdks/emoji/README.md#listapplicationemojis) - Returns an object containing a list of emoji objects for the given application under the items key. Includes a user object for the team member that uploaded the emoji from the app's settings, or for the bot user if uploaded using the API.
- [`emojiListGuildEmojis`](docs/sdks/emoji/README.md#listguildemojis) - Returns a list of emoji objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
- [`emojiUpdateApplicationEmoji`](docs/sdks/emoji/README.md#updateapplicationemoji) - Modify the given emoji. Returns the updated emoji object on success.
- [`emojiUpdateGuildEmoji`](docs/sdks/emoji/README.md#updateguildemoji) - Modify the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.
- [`entitlementsConsume`](docs/sdks/entitlements/README.md#consume) - For One-Time Purchase consumable SKUs, marks a given entitlement for the user as consumed. The entitlement will have consumed: true when using List Entitlements. Returns a 204 No Content on success.
- [`entitlementsCreateTest`](docs/sdks/entitlements/README.md#createtest) - Creates a test entitlement to a given SKU for a given guild or user. Discord will act as though that user or guild has entitlement to your premium offering. This endpoint returns a partial entitlement object.
- [`entitlementsDeleteTest`](docs/sdks/entitlements/README.md#deletetest) - Deletes a currently-active test entitlement. Discord will act as though that user or guild no longer has entitlement to your premium offering. Returns 204 No Content on success.
- [`entitlementsGet`](docs/sdks/entitlements/README.md#get) - Returns an entitlement.
- [`entitlementsList`](docs/sdks/entitlements/README.md#list) - Returns all entitlements for a given app, active and expired.
- [`guildsAddMember`](docs/sdks/guilds/README.md#addmember) - Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.
- [`guildsAddMemberRole`](docs/sdks/guilds/README.md#addmemberrole) - Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
- [`guildsBulkBan`](docs/sdks/guilds/README.md#bulkban) - Ban up to 200 users from a guild, and optionally delete previous messages sent by the banned users. Requires both the BAN_MEMBERS and MANAGE_GUILD permissions. Returns a 200 response on success, including the fields banned_users with the IDs of the banned users and failed_users with IDs that could not be banned or were already banned.
- [`guildScheduledEventsCreate`](docs/sdks/guildscheduledevents/README.md#create) - Create a guild scheduled event in the guild. Returns a guild scheduled event object on success. Fires a Guild Scheduled Event Create Gateway event.
- [`guildScheduledEventsDelete`](docs/sdks/guildscheduledevents/README.md#delete) - Delete a guild scheduled event. Returns a 204 on success. Fires a Guild Scheduled Event Delete Gateway event.
- [`guildScheduledEventsGet`](docs/sdks/guildscheduledevents/README.md#get) - Get a guild scheduled event. Returns a guild scheduled event object on success.
- [`guildScheduledEventsGetUsers`](docs/sdks/guildscheduledevents/README.md#getusers) - Get a list of guild scheduled event users subscribed to a guild scheduled event. Returns a list of guild scheduled event user objects on success. Guild member data, if it exists, is included if the with_member query parameter is set.
- [`guildScheduledEventsList`](docs/sdks/guildscheduledevents/README.md#list) - Returns a list of guild scheduled event objects for the given guild.
- [`guildScheduledEventsUpdate`](docs/sdks/guildscheduledevents/README.md#update) - Modify a guild scheduled event. Returns the modified guild scheduled event object on success. Fires a Guild Scheduled Event Update Gateway event.
- [`guildsCreate`](docs/sdks/guilds/README.md#create) - Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.
- [`guildsCreateBan`](docs/sdks/guilds/README.md#createban) - Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.
- [`guildsCreateChannel`](docs/sdks/guilds/README.md#createchannel) - Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.
- [`guildsCreateRole`](docs/sdks/guilds/README.md#createrole) - Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.
- [`guildsDelete`](docs/sdks/guilds/README.md#delete) - Delete a guild permanently. User must be owner. Returns 204 No Content on success. Fires a Guild Delete Gateway event.
- [`guildsDeleteIntegration`](docs/sdks/guilds/README.md#deleteintegration) - Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.
- [`guildsDeleteRole`](docs/sdks/guilds/README.md#deleterole) - Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.
- [`guildsGet`](docs/sdks/guilds/README.md#get) - Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.
- [`guildsGetBan`](docs/sdks/guilds/README.md#getban) - Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.
- [`guildsGetMember`](docs/sdks/guilds/README.md#getmember) - Returns a guild member object for the specified user.
- [`guildsGetOnboarding`](docs/sdks/guilds/README.md#getonboarding) - Returns the Onboarding object for the guild.
- [`guildsGetPreview`](docs/sdks/guilds/README.md#getpreview) - Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be discoverable.
- [`guildsGetRole`](docs/sdks/guilds/README.md#getrole) - Returns a role object for the specified role.
- [`guildsGetVanityUrl`](docs/sdks/guilds/README.md#getvanityurl) - Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.
- [`guildsGetWelcomeScreen`](docs/sdks/guilds/README.md#getwelcomescreen) - Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.
- [`guildsGetWidget`](docs/sdks/guilds/README.md#getwidget) - Returns the widget for the guild. Fires an Invite Create Gateway event when an invite channel is defined and a new Invite is generated.
- [`guildsGetWidgetPng`](docs/sdks/guilds/README.md#getwidgetpng) - Returns a PNG image widget for the guild. Requires no permissions or authentication.
- [`guildsGetWidgetSettings`](docs/sdks/guilds/README.md#getwidgetsettings) - Returns a guild widget settings object. Requires the MANAGE_GUILD permission.
- [`guildsListActiveThreads`](docs/sdks/guilds/README.md#listactivethreads) - Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.
- [`guildsListBans`](docs/sdks/guilds/README.md#listbans) - Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.
- [`guildsListChannels`](docs/sdks/guilds/README.md#listchannels) - Returns a list of guild channel objects. Does not include threads.
- [`guildsListIntegrations`](docs/sdks/guilds/README.md#listintegrations) - Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.
- [`guildsListInvites`](docs/sdks/guilds/README.md#listinvites) - Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.
- [`guildsListMembers`](docs/sdks/guilds/README.md#listmembers) - Returns a list of guild member objects that are members of the guild.
- [`guildsListRoles`](docs/sdks/guilds/README.md#listroles) - Returns a list of role objects for the guild.
- [`guildsListVoiceRegions`](docs/sdks/guilds/README.md#listvoiceregions) - Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.
- [`guildsPreviewPrune`](docs/sdks/guilds/README.md#previewprune) - Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions.
- [`guildsPrune`](docs/sdks/guilds/README.md#prune) - Begin a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions. Returns an object with one pruned key indicating the number of members that were removed in the prune operation. Fires multiple Guild Member Remove Gateway events.
- [`guildsRemoveBan`](docs/sdks/guilds/README.md#removeban) - Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.
- [`guildsRemoveMember`](docs/sdks/guilds/README.md#removemember) - Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.
- [`guildsRemoveMemberRole`](docs/sdks/guilds/README.md#removememberrole) - Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
- [`guildsSearchMembers`](docs/sdks/guilds/README.md#searchmembers) - Returns a list of guild member objects whose username or nickname starts with a provided string.
- [`guildsSetMfaLevel`](docs/sdks/guilds/README.md#setmfalevel) - Modify a guild's MFA level. Requires guild ownership. Returns the updated level on success. Fires a Guild Update Gateway event.
- [`guildsUpdate`](docs/sdks/guilds/README.md#update) - Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.
- [`guildsUpdateChannelPositions`](docs/sdks/guilds/README.md#updatechannelpositions) - Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.
- [`guildsUpdateCurrentMember`](docs/sdks/guilds/README.md#updatecurrentmember) - Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.
- [`guildsUpdateMember`](docs/sdks/guilds/README.md#updatemember) - Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.
- [`guildsUpdateOnboarding`](docs/sdks/guilds/README.md#updateonboarding) - Modifies the onboarding configuration of the guild. Returns a 200 with the Onboarding object for the guild. Requires the MANAGE_GUILD and MANAGE_ROLES permissions.
- [`guildsUpdateRole`](docs/sdks/guilds/README.md#updaterole) - Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.
- [`guildsUpdateRolePositions`](docs/sdks/guilds/README.md#updaterolepositions) - Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.
- [`guildsUpdateWelcomeScreen`](docs/sdks/guilds/README.md#updatewelcomescreen) - Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.
- [`guildsUpdateWidgetSettings`](docs/sdks/guilds/README.md#updatewidgetsettings) - Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget settings object. Fires a Guild Update Gateway event.
- [`guildTemplatesCreate`](docs/sdks/guildtemplates/README.md#create) - Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns the created guild template object on success.
- [`guildTemplatesCreateGuild`](docs/sdks/guildtemplates/README.md#createguild) - Create a new guild based on a template. Returns a guild object on success. Fires a Guild Create Gateway event.
- [`guildTemplatesDelete`](docs/sdks/guildtemplates/README.md#delete) - Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted guild template object on success.
- [`guildTemplatesGet`](docs/sdks/guildtemplates/README.md#get) - Returns a guild template object for the given code.
- [`guildTemplatesGetNewMemberWelcome`](docs/sdks/guildtemplates/README.md#getnewmemberwelcome) - Returns the welcome screen object for the guild.
- [`guildTemplatesList`](docs/sdks/guildtemplates/README.md#list) - Returns an array of guild template objects. Requires the MANAGE_GUILD permission.
- [`guildTemplatesSync`](docs/sdks/guildtemplates/README.md#sync) - Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission. Returns the guild template object on success.
- [`guildTemplatesUpdate`](docs/sdks/guildtemplates/README.md#update) - Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns the guild template object on success.
- [`invitesDelete`](docs/sdks/invites/README.md#delete) - Delete an invite. Requires the MANAGE_CHANNELS permission on the channel this invite belongs to, or MANAGE_GUILD to remove any invite across the guild. Returns an invite object on success.
- [`invitesGet`](docs/sdks/invites/README.md#get) - Returns an invite object for the given code.
- [`lobbiesAddMember`](docs/sdks/lobbies/README.md#addmember) - Adds a user to a lobby.
- [`lobbiesConnectToChannel`](docs/sdks/lobbies/README.md#connecttochannel) - Connects a lobby to a channel.
- [`lobbiesCreate`](docs/sdks/lobbies/README.md#create) - Creates a new lobby. Returns a lobby object on success.
- [`lobbiesCreateOrJoin`](docs/sdks/lobbies/README.md#createorjoin) - Creates a new lobby or joins an existing one. Returns a lobby object on success.
- [`lobbiesGet`](docs/sdks/lobbies/README.md#get) - Returns the lobby object for the given id.
- [`lobbiesLeave`](docs/sdks/lobbies/README.md#leave) - Removes the current user from the specified lobby. It is safe to call this even if the user is no longer a member of the lobby, but will fail if the lobby does not exist.
- [`lobbiesRemoveMember`](docs/sdks/lobbies/README.md#removemember) - Removes a user from a lobby.
- [`lobbiesSendMessage`](docs/sdks/lobbies/README.md#sendmessage) - Sends a message to the lobby.
- [`lobbiesUpdate`](docs/sdks/lobbies/README.md#update) - Updates a lobby. Returns a lobby object on success.
- [`messagesBulkDelete`](docs/sdks/messages/README.md#bulkdelete) - Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the MANAGE_MESSAGES permission.
- [`messagesCreateForm`](docs/sdks/messages/README.md#createform) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
- [`messagesCreateJson`](docs/sdks/messages/README.md#createjson) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
- [`messagesCreateMultipart`](docs/sdks/messages/README.md#createmultipart) - Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.
- [`messagesCreateReaction`](docs/sdks/messages/README.md#createreaction) - Create a reaction for the message. This endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.
- [`messagesCrosspost`](docs/sdks/messages/README.md#crosspost) - Crosspost a message in an Announcement Channel to following channels. This endpoint requires the SEND_MESSAGES permission, if the current user sent the message, or additionally the MANAGE_MESSAGES permission, for all other messages, to be present for the current user.
- [`messagesDelete`](docs/sdks/messages/README.md#delete) - Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission.
- [`messagesDeleteAllReactions`](docs/sdks/messages/README.md#deleteallreactions) - Deletes all reactions on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.
- [`messagesDeleteAllReactionsForEmoji`](docs/sdks/messages/README.md#deleteallreactionsforemoji) - Deletes all the reactions for a given emoji on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.
- [`messagesDeleteOwnReaction`](docs/sdks/messages/README.md#deleteownreaction) - Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
- [`messagesDeleteUserReaction`](docs/sdks/messages/README.md#deleteuserreaction) - Deletes another user's reaction. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.
- [`messagesGet`](docs/sdks/messages/README.md#get) - Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.
- [`messagesList`](docs/sdks/messages/README.md#list) - Returns the messages for a channel. If operating on a guild channel, this endpoint requires the VIEW_CHANNEL permission to be present on the current user.
- [`messagesListReactionsByEmoji`](docs/sdks/messages/README.md#listreactionsbyemoji) - Get a list of users that reacted with a specific emoji.
- [`messagesUpdateForm`](docs/sdks/messages/README.md#updateform) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
- [`messagesUpdateJson`](docs/sdks/messages/README.md#updatejson) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
- [`messagesUpdateMultipart`](docs/sdks/messages/README.md#updatemultipart) - Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.
- [`pollsExpire`](docs/sdks/polls/README.md#expire) - Immediately ends the poll. You cannot end polls from other users. Returns a message object. Fires a Message Update Gateway event.
- [`pollsGetAnswerVoters`](docs/sdks/polls/README.md#getanswervoters) - Get a list of users that voted for a specific answer in a poll.
- [`soundboardsCreateGuildSoundboardSound`](docs/sdks/soundboards/README.md#createguildsoundboardsound) - Create a new soundboard sound for the guild. Returns the new soundboard sound object on success.
- [`soundboardsDeleteGuildSoundboardSound`](docs/sdks/soundboards/README.md#deleteguildsoundboardsound) - Delete a soundboard sound from a guild. Returns 204 No Content on success.
- [`soundboardsGetGuildSoundboardSound`](docs/sdks/soundboards/README.md#getguildsoundboardsound) - Returns a soundboard sound object for the given guild and sound IDs.
- [`soundboardsGetSoundboardDefaultSounds`](docs/sdks/soundboards/README.md#getsoundboarddefaultsounds) - Returns a list of the default sounds available in the soundboard.
- [`soundboardsListGuildSoundboardSounds`](docs/sdks/soundboards/README.md#listguildsoundboardsounds) - Returns a list of soundboard sound objects for the given guild.
- [`soundboardsSendSoundboardSound`](docs/sdks/soundboards/README.md#sendsoundboardsound) - Sends a soundboard sound to a channel.
- [`soundboardsUpdateGuildSoundboardSound`](docs/sdks/soundboards/README.md#updateguildsoundboardsound) - Update a soundboard sound in a guild. Returns the updated soundboard sound object on success.
- [`stageInstancesCreate`](docs/sdks/stageinstances/README.md#create) - Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event. Requires the user to be a moderator of the Stage channel.
- [`stageInstancesDelete`](docs/sdks/stageinstances/README.md#delete) - Deletes the Stage instance. Returns 204 No Content. Fires a Stage Instance Delete Gateway event. Requires the user to be a moderator of the Stage channel.
- [`stageInstancesGet`](docs/sdks/stageinstances/README.md#get) - Gets the stage instance associated with the Stage channel, if it exists.
- [`stageInstancesUpdate`](docs/sdks/stageinstances/README.md#update) - Updates fields of an existing Stage instance. Returns the updated Stage instance. Fires a Stage Instance Update Gateway event. Requires the user to be a moderator of the Stage channel.
- [`stickersCreateGuildSticker`](docs/sdks/stickers/README.md#createguildsticker) - Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.
- [`stickersDeleteGuildSticker`](docs/sdks/stickers/README.md#deleteguildsticker) - Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.
- [`stickersGet`](docs/sdks/stickers/README.md#get) - Returns a sticker object for the given sticker ID.
- [`stickersGetGuildSticker`](docs/sdks/stickers/README.md#getguildsticker) - Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
- [`stickersGetPack`](docs/sdks/stickers/README.md#getpack) - Returns a sticker pack object for the given sticker pack ID.
- [`stickersListGuildStickers`](docs/sdks/stickers/README.md#listguildstickers) - Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.
- [`stickersListPacks`](docs/sdks/stickers/README.md#listpacks) - Returns a list of available sticker packs.
- [`stickersUpdateGuildSticker`](docs/sdks/stickers/README.md#updateguildsticker) - Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.
- [`usersCreateDM`](docs/sdks/users/README.md#createdm) - Create a new DM channel with a user. Returns a DM channel object (if one already exists, it will be returned instead).
- [`usersGet`](docs/sdks/users/README.md#get) - Returns a user object for a given user ID.
- [`usersGetApplicationRoleConnection`](docs/sdks/users/README.md#getapplicationroleconnection) - Returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
- [`usersGetCurrent`](docs/sdks/users/README.md#getcurrent) - Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email if the user has one.
- [`usersGetGuildMember`](docs/sdks/users/README.md#getguildmember) - Returns a guild member object for the current user. Requires the guilds.members.read OAuth2 scope.
- [`usersLeaveGuild`](docs/sdks/users/README.md#leaveguild) - Leave a guild. Returns a 204 empty response on success. Fires a Guild Delete Gateway event and a Guild Member Remove Gateway event.
- [`usersListConnections`](docs/sdks/users/README.md#listconnections) - Returns a list of connection objects. Requires the connections OAuth2 scope.
- [`usersListGuilds`](docs/sdks/users/README.md#listguilds) - Returns a list of partial guild objects the current user is a member of. For OAuth2, requires the guilds scope.
- [`usersUpdateApplicationRoleConnection`](docs/sdks/users/README.md#updateapplicationroleconnection) - Updates and returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.
- [`usersUpdateCurrent`](docs/sdks/users/README.md#updatecurrent) - Modify the requester's user account settings. Returns a user object on success. Fires a User Update Gateway event.
- [`voiceGetCurrentUserState`](docs/sdks/voice/README.md#getcurrentuserstate) - Returns the current user's voice state in the guild.
- [`voiceGetUserState`](docs/sdks/voice/README.md#getuserstate) - Returns the specified user's voice state in the guild.
- [`voiceListRegions`](docs/sdks/voice/README.md#listregions) - Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.
- [`voiceUpdateCurrentUserState`](docs/sdks/voice/README.md#updatecurrentuserstate) - Updates the current user's voice state. Returns 204 No Content on success. Fires a Voice State Update Gateway event.
- [`voiceUpdateUserState`](docs/sdks/voice/README.md#updateuserstate) - Updates another user's voice state. Fires a Voice State Update Gateway event.
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission. Fires a Webhooks Update Gateway event.
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a 204 No Content response on success. Fires a Webhooks Update Gateway event.
- [`webhooksDeleteMessage`](docs/sdks/webhooks/README.md#deletemessage) - Deletes a message that was created by the webhook. Returns a 204 No Content response on success.
- [`webhooksDeleteOriginalMessage`](docs/sdks/webhooks/README.md#deleteoriginalmessage) - Deletes the initial webhook message.
- [`webhooksDeleteWithToken`](docs/sdks/webhooks/README.md#deletewithtoken) - Same as above, except this call does not require authentication.
- [`webhooksExecuteGithub`](docs/sdks/webhooks/README.md#executegithub) - Add a new webhook to your GitHub repo (in the repo's settings), and use this endpoint as the "Payload URL."
- [`webhooksExecuteSlack`](docs/sdks/webhooks/README.md#executeslack) - Refer to Slack's documentation for more information. We do not support Slack's channel, icon_emoji, mrkdwn, or mrkdwn_in properties.
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Returns the new webhook object for the given id.
- [`webhooksGetMessage`](docs/sdks/webhooks/README.md#getmessage) - Returns a previously-sent webhook message from the same token. Returns a message object on success.
- [`webhooksGetOriginalMessage`](docs/sdks/webhooks/README.md#getoriginalmessage) - Returns the initial webhook message.
- [`webhooksGetWithToken`](docs/sdks/webhooks/README.md#getwithtoken) - Same as above, except this call does not require authentication and returns no user in the webhook object.
- [`webhooksListForChannel`](docs/sdks/webhooks/README.md#listforchannel) - Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.
- [`webhooksListForGuild`](docs/sdks/webhooks/README.md#listforguild) - Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook object on success. Fires a Webhooks Update Gateway event.
- [`webhooksUpdateMessageForm`](docs/sdks/webhooks/README.md#updatemessageform) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
- [`webhooksUpdateMessageJson`](docs/sdks/webhooks/README.md#updatemessagejson) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
- [`webhooksUpdateMessageMultipart`](docs/sdks/webhooks/README.md#updatemessagemultipart) - Edits a previously-sent webhook message from the same token. Returns a message object on success.
- [`webhooksUpdateOriginalMessageForm`](docs/sdks/webhooks/README.md#updateoriginalmessageform) - Edits the initial webhook message.
- [`webhooksUpdateOriginalMessageJson`](docs/sdks/webhooks/README.md#updateoriginalmessagejson) - Edits the initial webhook message.
- [`webhooksUpdateOriginalMessageMultipart`](docs/sdks/webhooks/README.md#updateoriginalmessagemultipart) - Edits the initial webhook message.
- [`webhooksUpdateWithToken`](docs/sdks/webhooks/README.md#updatewithtoken) - Same as above, except this call does not require authentication, does not accept a channel_id parameter in the body, and does not return a user in the webhook object.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getMe` method may throw the following errors:

| Error Type           | Status Code | Content Type     |
| -------------------- | ----------- | ---------------- |
| errors.ErrorResponse | 4XX         | application/json |
| errors.APIError      | 5XX         | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";
import {
  ErrorResponse,
  SDKValidationError,
} from "@ryan.blunden/discord-sdk/models/errors";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  let result;
  try {
    result = await discord.applications.getMe();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  serverURL: "https://discord.com/api/v10",
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";
import { HTTPClient } from "@ryan.blunden/discord-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Discord({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const sdk = new Discord({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DISCORD_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@ryan-blunden/discord-sdk&utm_campaign=typescript)
