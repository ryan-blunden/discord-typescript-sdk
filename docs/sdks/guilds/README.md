# Guilds

## Overview

### Available Operations

* [get](#get) - Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.
* [update](#update) - Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.
* [listBans](#listbans) - Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.
* [getBan](#getban) - Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.
* [createBan](#createban) - Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.
* [removeBan](#removeban) - Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.
* [bulkBan](#bulkban) - Ban up to 200 users from a guild, and optionally delete previous messages sent by the banned users. Requires both the BAN_MEMBERS and MANAGE_GUILD permissions. Returns a 200 response on success, including the fields banned_users with the IDs of the banned users and failed_users with IDs that could not be banned or were already banned.
* [listChannels](#listchannels) - Returns a list of guild channel objects. Does not include threads.
* [createChannel](#createchannel) - Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.
* [updateChannelPositions](#updatechannelpositions) - Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.
* [updateIncidentActions](#updateincidentactions) - Modifies the incident actions of the guild. Returns a 200 with the Incidents Data object for the guild. Requires the MANAGE_GUILD permission.
* [listIntegrations](#listintegrations) - Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.
* [deleteIntegration](#deleteintegration) - Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.
* [listInvites](#listinvites) - Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.
* [listMembers](#listmembers) - Returns a list of guild member objects that are members of the guild.
* [updateCurrentMember](#updatecurrentmember) - Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.
* [searchMembers](#searchmembers) - Returns a list of guild member objects whose username or nickname starts with a provided string.
* [getMember](#getmember) - Returns a guild member object for the specified user.
* [addMember](#addmember) - Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.
* [removeMember](#removemember) - Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.
* [updateMember](#updatemember) - Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.
* [addMemberRole](#addmemberrole) - Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
* [removeMemberRole](#removememberrole) - Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.
* [getOnboarding](#getonboarding) - Returns the Onboarding object for the guild.
* [updateOnboarding](#updateonboarding) - Modifies the onboarding configuration of the guild. Returns a 200 with the Onboarding object for the guild. Requires the MANAGE_GUILD and MANAGE_ROLES permissions.
* [getPreview](#getpreview) - Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be discoverable.
* [previewPrune](#previewprune) - Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions.
* [prune](#prune) - Begin a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions. Returns an object with one pruned key indicating the number of members that were removed in the prune operation. Fires multiple Guild Member Remove Gateway events.
* [listVoiceRegions](#listvoiceregions) - Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.
* [listRoles](#listroles) - Returns a list of role objects for the guild.
* [createRole](#createrole) - Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.
* [updateRolePositions](#updaterolepositions) - Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.
* [getRole](#getrole) - Returns a role object for the specified role.
* [deleteRole](#deleterole) - Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.
* [updateRole](#updaterole) - Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.
* [listActiveThreads](#listactivethreads) - Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.
* [getVanityUrl](#getvanityurl) - Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.
* [getWelcomeScreen](#getwelcomescreen) - Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.
* [updateWelcomeScreen](#updatewelcomescreen) - Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.
* [getWidgetSettings](#getwidgetsettings) - Returns a guild widget settings object. Requires the MANAGE_GUILD permission.
* [updateWidgetSettings](#updatewidgetsettings) - Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget settings object. Fires a Guild Update Gateway event.
* [getWidget](#getwidget) - Returns the widget for the guild. Fires an Invite Create Gateway event when an invite channel is defined and a new Invite is generated.
* [getWidgetPng](#getwidgetpng) - Returns a PNG image widget for the guild. Requires no permissions or authentication.

## get

Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild" method="get" path="/guilds/{guild_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.get({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGet } from "@ryan.blunden/discord-sdk/funcs/guildsGet.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGet(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildRequest](../../models/operations/getguildrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildResponse](../../models/operations/getguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## update

Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild" method="patch" path="/guilds/{guild_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.update({
    guildId: "<value>",
    guildPatchRequestPartial: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdate } from "@ryan.blunden/discord-sdk/funcs/guildsUpdate.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdate(discord, {
    guildId: "<value>",
    guildPatchRequestPartial: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildRequest](../../models/operations/updateguildrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildResponse](../../models/operations/updateguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listBans

Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_bans" method="get" path="/guilds/{guild_id}/bans" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listBans({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListBans } from "@ryan.blunden/discord-sdk/funcs/guildsListBans.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListBans(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListBans failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildBansRequest](../../models/operations/listguildbansrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildBansResponse](../../models/operations/listguildbansresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getBan

Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_ban" method="get" path="/guilds/{guild_id}/bans/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getBan({
    guildId: "<value>",
    userId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetBan } from "@ryan.blunden/discord-sdk/funcs/guildsGetBan.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetBan(discord, {
    guildId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetBan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildBanRequest](../../models/operations/getguildbanrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildBanResponse](../../models/operations/getguildbanresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## createBan

Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ban_user_from_guild" method="put" path="/guilds/{guild_id}/bans/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.createBan({
    guildId: "<value>",
    userId: "<value>",
    banUserFromGuildRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsCreateBan } from "@ryan.blunden/discord-sdk/funcs/guildsCreateBan.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsCreateBan(discord, {
    guildId: "<value>",
    userId: "<value>",
    banUserFromGuildRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsCreateBan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BanUserFromGuildRequest](../../models/operations/banuserfromguildrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BanUserFromGuildResponse](../../models/operations/banuserfromguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## removeBan

Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unban_user_from_guild" method="delete" path="/guilds/{guild_id}/bans/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.removeBan({
    guildId: "<value>",
    userId: "<value>",
    unbanUserFromGuildRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsRemoveBan } from "@ryan.blunden/discord-sdk/funcs/guildsRemoveBan.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsRemoveBan(discord, {
    guildId: "<value>",
    userId: "<value>",
    unbanUserFromGuildRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsRemoveBan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnbanUserFromGuildRequest](../../models/operations/unbanuserfromguildrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnbanUserFromGuildResponse](../../models/operations/unbanuserfromguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## bulkBan

Ban up to 200 users from a guild, and optionally delete previous messages sent by the banned users. Requires both the BAN_MEMBERS and MANAGE_GUILD permissions. Returns a 200 response on success, including the fields banned_users with the IDs of the banned users and failed_users with IDs that could not be banned or were already banned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_ban_users_from_guild" method="post" path="/guilds/{guild_id}/bulk-ban" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.bulkBan({
    guildId: "<value>",
    bulkBanUsersRequest: {
      userIds: [
        "<value 1>",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsBulkBan } from "@ryan.blunden/discord-sdk/funcs/guildsBulkBan.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsBulkBan(discord, {
    guildId: "<value>",
    bulkBanUsersRequest: {
      userIds: [
        "<value 1>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsBulkBan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkBanUsersFromGuildRequest](../../models/operations/bulkbanusersfromguildrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BulkBanUsersFromGuildResponse](../../models/operations/bulkbanusersfromguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listChannels

Returns a list of guild channel objects. Does not include threads.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_channels" method="get" path="/guilds/{guild_id}/channels" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.guilds.listChannels({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  }, {
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListChannels } from "@ryan.blunden/discord-sdk/funcs/guildsListChannels.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore();

async function run() {
  const res = await guildsListChannels(discord, {
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  }, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListChannels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildChannelsRequest](../../models/operations/listguildchannelsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListGuildChannelsSecurity](../../models/operations/listguildchannelssecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildChannelsResponse](../../models/operations/listguildchannelsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## createChannel

Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_guild_channel" method="post" path="/guilds/{guild_id}/channels" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.createChannel({
    guildId: "<value>",
    createGuildChannelRequest: {
      name: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsCreateChannel } from "@ryan.blunden/discord-sdk/funcs/guildsCreateChannel.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsCreateChannel(discord, {
    guildId: "<value>",
    createGuildChannelRequest: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsCreateChannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGuildChannelRequest](../../models/operations/createguildchannelrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGuildChannelResponse](../../models/operations/createguildchannelresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateChannelPositions

Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_update_guild_channels" method="patch" path="/guilds/{guild_id}/channels" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateChannelPositions({
    guildId: "<value>",
    requestBody: [
      {},
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateChannelPositions } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateChannelPositions.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateChannelPositions(discord, {
    guildId: "<value>",
    requestBody: [
      {},
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateChannelPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkUpdateGuildChannelsRequest](../../models/operations/bulkupdateguildchannelsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BulkUpdateGuildChannelsResponse](../../models/operations/bulkupdateguildchannelsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateIncidentActions

Modifies the incident actions of the guild. Returns a 200 with the Incidents Data object for the guild. Requires the MANAGE_GUILD permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_incident_actions" method="put" path="/guilds/{guild_id}/incident-actions" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateIncidentActions({
    guildId: "<value>",
    guildIncidentActionsRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateIncidentActions } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateIncidentActions.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateIncidentActions(discord, {
    guildId: "<value>",
    guildIncidentActionsRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateIncidentActions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildIncidentActionsRequest](../../models/operations/updateguildincidentactionsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildIncidentActionsResponse](../../models/operations/updateguildincidentactionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listIntegrations

Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_integrations" method="get" path="/guilds/{guild_id}/integrations" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listIntegrations({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListIntegrations } from "@ryan.blunden/discord-sdk/funcs/guildsListIntegrations.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListIntegrations(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListIntegrations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildIntegrationsRequest](../../models/operations/listguildintegrationsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildIntegrationsResponse](../../models/operations/listguildintegrationsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## deleteIntegration

Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_integration" method="delete" path="/guilds/{guild_id}/integrations/{integration_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.deleteIntegration({
    guildId: "<value>",
    integrationId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsDeleteIntegration } from "@ryan.blunden/discord-sdk/funcs/guildsDeleteIntegration.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsDeleteIntegration(discord, {
    guildId: "<value>",
    integrationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsDeleteIntegration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildIntegrationRequest](../../models/operations/deleteguildintegrationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildIntegrationResponse](../../models/operations/deleteguildintegrationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listInvites

Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_invites" method="get" path="/guilds/{guild_id}/invites" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listInvites({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListInvites } from "@ryan.blunden/discord-sdk/funcs/guildsListInvites.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListInvites(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListInvites failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildInvitesRequest](../../models/operations/listguildinvitesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildInvitesResponse](../../models/operations/listguildinvitesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listMembers

Returns a list of guild member objects that are members of the guild.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_members" method="get" path="/guilds/{guild_id}/members" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listMembers({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListMembers } from "@ryan.blunden/discord-sdk/funcs/guildsListMembers.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListMembers(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListMembers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildMembersRequest](../../models/operations/listguildmembersrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildMembersResponse](../../models/operations/listguildmembersresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateCurrentMember

Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_my_guild_member" method="patch" path="/guilds/{guild_id}/members/@me" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateCurrentMember({
    guildId: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateCurrentMember } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateCurrentMember.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateCurrentMember(discord, {
    guildId: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateCurrentMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMyGuildMemberRequest](../../models/operations/updatemyguildmemberrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateMyGuildMemberResponse](../../models/operations/updatemyguildmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## searchMembers

Returns a list of guild member objects whose username or nickname starts with a provided string.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search_guild_members" method="get" path="/guilds/{guild_id}/members/search" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.searchMembers({
    guildId: "<value>",
    limit: 682111,
    query: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsSearchMembers } from "@ryan.blunden/discord-sdk/funcs/guildsSearchMembers.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsSearchMembers(discord, {
    guildId: "<value>",
    limit: 682111,
    query: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsSearchMembers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchGuildMembersRequest](../../models/operations/searchguildmembersrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchGuildMembersResponse](../../models/operations/searchguildmembersresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getMember

Returns a guild member object for the specified user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_member" method="get" path="/guilds/{guild_id}/members/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getMember({
    guildId: "<value>",
    userId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetMember } from "@ryan.blunden/discord-sdk/funcs/guildsGetMember.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetMember(discord, {
    guildId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildMemberRequest](../../models/operations/getguildmemberrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildMemberResponse](../../models/operations/getguildmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## addMember

Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_guild_member" method="put" path="/guilds/{guild_id}/members/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.addMember({
    guildId: "<value>",
    userId: "<value>",
    botAddGuildMemberRequest: {
      accessToken: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsAddMember } from "@ryan.blunden/discord-sdk/funcs/guildsAddMember.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsAddMember(discord, {
    guildId: "<value>",
    userId: "<value>",
    botAddGuildMemberRequest: {
      accessToken: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsAddMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddGuildMemberRequest](../../models/operations/addguildmemberrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddGuildMemberResponse](../../models/operations/addguildmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## removeMember

Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_member" method="delete" path="/guilds/{guild_id}/members/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.removeMember({
    guildId: "<value>",
    userId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsRemoveMember } from "@ryan.blunden/discord-sdk/funcs/guildsRemoveMember.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsRemoveMember(discord, {
    guildId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsRemoveMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildMemberRequest](../../models/operations/deleteguildmemberrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildMemberResponse](../../models/operations/deleteguildmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateMember

Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_member" method="patch" path="/guilds/{guild_id}/members/{user_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateMember({
    guildId: "<value>",
    userId: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateMember } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateMember.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateMember(discord, {
    guildId: "<value>",
    userId: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildMemberRequest](../../models/operations/updateguildmemberrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildMemberResponse](../../models/operations/updateguildmemberresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## addMemberRole

Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_guild_member_role" method="put" path="/guilds/{guild_id}/members/{user_id}/roles/{role_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.addMemberRole({
    guildId: "<value>",
    userId: "<value>",
    roleId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsAddMemberRole } from "@ryan.blunden/discord-sdk/funcs/guildsAddMemberRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsAddMemberRole(discord, {
    guildId: "<value>",
    userId: "<value>",
    roleId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsAddMemberRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddGuildMemberRoleRequest](../../models/operations/addguildmemberrolerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddGuildMemberRoleResponse](../../models/operations/addguildmemberroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## removeMemberRole

Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_member_role" method="delete" path="/guilds/{guild_id}/members/{user_id}/roles/{role_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.removeMemberRole({
    guildId: "<value>",
    userId: "<value>",
    roleId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsRemoveMemberRole } from "@ryan.blunden/discord-sdk/funcs/guildsRemoveMemberRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsRemoveMemberRole(discord, {
    guildId: "<value>",
    userId: "<value>",
    roleId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsRemoveMemberRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildMemberRoleRequest](../../models/operations/deleteguildmemberrolerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildMemberRoleResponse](../../models/operations/deleteguildmemberroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getOnboarding

Returns the Onboarding object for the guild.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guilds_onboarding" method="get" path="/guilds/{guild_id}/onboarding" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getOnboarding({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetOnboarding } from "@ryan.blunden/discord-sdk/funcs/guildsGetOnboarding.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetOnboarding(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetOnboarding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildsOnboardingRequest](../../models/operations/getguildsonboardingrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildsOnboardingResponse](../../models/operations/getguildsonboardingresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateOnboarding

Modifies the onboarding configuration of the guild. Returns a 200 with the Onboarding object for the guild. Requires the MANAGE_GUILD and MANAGE_ROLES permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_guilds_onboarding" method="put" path="/guilds/{guild_id}/onboarding" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateOnboarding({
    guildId: "<value>",
    updateGuildOnboardingRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateOnboarding } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateOnboarding.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateOnboarding(discord, {
    guildId: "<value>",
    updateGuildOnboardingRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateOnboarding failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutGuildsOnboardingRequest](../../models/operations/putguildsonboardingrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutGuildsOnboardingResponse](../../models/operations/putguildsonboardingresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getPreview

Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be discoverable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_preview" method="get" path="/guilds/{guild_id}/preview" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getPreview({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetPreview } from "@ryan.blunden/discord-sdk/funcs/guildsGetPreview.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetPreview(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildPreviewRequest](../../models/operations/getguildpreviewrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildPreviewResponse](../../models/operations/getguildpreviewresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## previewPrune

Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_prune_guild" method="get" path="/guilds/{guild_id}/prune" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.previewPrune({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsPreviewPrune } from "@ryan.blunden/discord-sdk/funcs/guildsPreviewPrune.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsPreviewPrune(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsPreviewPrune failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PreviewPruneGuildRequest](../../models/operations/previewpruneguildrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PreviewPruneGuildResponse](../../models/operations/previewpruneguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## prune

Begin a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions. Returns an object with one pruned key indicating the number of members that were removed in the prune operation. Fires multiple Guild Member Remove Gateway events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="prune_guild" method="post" path="/guilds/{guild_id}/prune" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.prune({
    guildId: "<value>",
    pruneGuildRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsPrune } from "@ryan.blunden/discord-sdk/funcs/guildsPrune.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsPrune(discord, {
    guildId: "<value>",
    pruneGuildRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsPrune failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PruneGuildRequest](../../models/operations/pruneguildrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PruneGuildResponse](../../models/operations/pruneguildresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listVoiceRegions

Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_voice_regions" method="get" path="/guilds/{guild_id}/regions" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listVoiceRegions({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListVoiceRegions } from "@ryan.blunden/discord-sdk/funcs/guildsListVoiceRegions.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListVoiceRegions(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListVoiceRegions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildVoiceRegionsRequest](../../models/operations/listguildvoiceregionsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildVoiceRegionsResponse](../../models/operations/listguildvoiceregionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listRoles

Returns a list of role objects for the guild.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_guild_roles" method="get" path="/guilds/{guild_id}/roles" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listRoles({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListRoles } from "@ryan.blunden/discord-sdk/funcs/guildsListRoles.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListRoles(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGuildRolesRequest](../../models/operations/listguildrolesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListGuildRolesResponse](../../models/operations/listguildrolesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## createRole

Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_guild_role" method="post" path="/guilds/{guild_id}/roles" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.createRole({
    guildId: "<value>",
    createRoleRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsCreateRole } from "@ryan.blunden/discord-sdk/funcs/guildsCreateRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsCreateRole(discord, {
    guildId: "<value>",
    createRoleRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsCreateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGuildRoleRequest](../../models/operations/createguildrolerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateGuildRoleResponse](../../models/operations/createguildroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateRolePositions

Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_update_guild_roles" method="patch" path="/guilds/{guild_id}/roles" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateRolePositions({
    guildId: "<value>",
    requestBody: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateRolePositions } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateRolePositions.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateRolePositions(discord, {
    guildId: "<value>",
    requestBody: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateRolePositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkUpdateGuildRolesRequest](../../models/operations/bulkupdateguildrolesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BulkUpdateGuildRolesResponse](../../models/operations/bulkupdateguildrolesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getRole

Returns a role object for the specified role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_role" method="get" path="/guilds/{guild_id}/roles/{role_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getRole({
    guildId: "<value>",
    roleId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetRole } from "@ryan.blunden/discord-sdk/funcs/guildsGetRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetRole(discord, {
    guildId: "<value>",
    roleId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildRoleRequest](../../models/operations/getguildrolerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildRoleResponse](../../models/operations/getguildroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## deleteRole

Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_guild_role" method="delete" path="/guilds/{guild_id}/roles/{role_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.deleteRole({
    guildId: "<value>",
    roleId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsDeleteRole } from "@ryan.blunden/discord-sdk/funcs/guildsDeleteRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsDeleteRole(discord, {
    guildId: "<value>",
    roleId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsDeleteRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteGuildRoleRequest](../../models/operations/deleteguildrolerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteGuildRoleResponse](../../models/operations/deleteguildroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateRole

Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_role" method="patch" path="/guilds/{guild_id}/roles/{role_id}" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateRole({
    guildId: "<value>",
    roleId: "<value>",
    updateRoleRequestPartial: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateRole } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateRole.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateRole(discord, {
    guildId: "<value>",
    roleId: "<value>",
    updateRoleRequestPartial: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildRoleRequest](../../models/operations/updateguildrolerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildRoleResponse](../../models/operations/updateguildroleresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## listActiveThreads

Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_active_guild_threads" method="get" path="/guilds/{guild_id}/threads/active" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.listActiveThreads({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsListActiveThreads } from "@ryan.blunden/discord-sdk/funcs/guildsListActiveThreads.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsListActiveThreads(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsListActiveThreads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetActiveGuildThreadsRequest](../../models/operations/getactiveguildthreadsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetActiveGuildThreadsResponse](../../models/operations/getactiveguildthreadsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getVanityUrl

Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_vanity_url" method="get" path="/guilds/{guild_id}/vanity-url" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getVanityUrl({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetVanityUrl } from "@ryan.blunden/discord-sdk/funcs/guildsGetVanityUrl.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetVanityUrl(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetVanityUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildVanityUrlRequest](../../models/operations/getguildvanityurlrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildVanityUrlResponse](../../models/operations/getguildvanityurlresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getWelcomeScreen

Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_welcome_screen" method="get" path="/guilds/{guild_id}/welcome-screen" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getWelcomeScreen({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetWelcomeScreen } from "@ryan.blunden/discord-sdk/funcs/guildsGetWelcomeScreen.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetWelcomeScreen(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetWelcomeScreen failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildWelcomeScreenRequest](../../models/operations/getguildwelcomescreenrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildWelcomeScreenResponse](../../models/operations/getguildwelcomescreenresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateWelcomeScreen

Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_welcome_screen" method="patch" path="/guilds/{guild_id}/welcome-screen" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateWelcomeScreen({
    guildId: "<value>",
    welcomeScreenPatchRequestPartial: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateWelcomeScreen } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateWelcomeScreen.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateWelcomeScreen(discord, {
    guildId: "<value>",
    welcomeScreenPatchRequestPartial: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateWelcomeScreen failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildWelcomeScreenRequest](../../models/operations/updateguildwelcomescreenrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildWelcomeScreenResponse](../../models/operations/updateguildwelcomescreenresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getWidgetSettings

Returns a guild widget settings object. Requires the MANAGE_GUILD permission.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_widget_settings" method="get" path="/guilds/{guild_id}/widget" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getWidgetSettings({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetWidgetSettings } from "@ryan.blunden/discord-sdk/funcs/guildsGetWidgetSettings.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetWidgetSettings(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetWidgetSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildWidgetSettingsRequest](../../models/operations/getguildwidgetsettingsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildWidgetSettingsResponse](../../models/operations/getguildwidgetsettingsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## updateWidgetSettings

Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget settings object. Fires a Guild Update Gateway event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_guild_widget_settings" method="patch" path="/guilds/{guild_id}/widget" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.updateWidgetSettings({
    guildId: "<value>",
    requestBody: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsUpdateWidgetSettings } from "@ryan.blunden/discord-sdk/funcs/guildsUpdateWidgetSettings.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsUpdateWidgetSettings(discord, {
    guildId: "<value>",
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsUpdateWidgetSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateGuildWidgetSettingsRequest](../../models/operations/updateguildwidgetsettingsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateGuildWidgetSettingsResponse](../../models/operations/updateguildwidgetsettingsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getWidget

Returns the widget for the guild. Fires an Invite Create Gateway event when an invite channel is defined and a new Invite is generated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_widget" method="get" path="/guilds/{guild_id}/widget.json" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getWidget({
    guildId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetWidget } from "@ryan.blunden/discord-sdk/funcs/guildsGetWidget.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetWidget(discord, {
    guildId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetWidget failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildWidgetRequest](../../models/operations/getguildwidgetrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildWidgetResponse](../../models/operations/getguildwidgetresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |

## getWidgetPng

Returns a PNG image widget for the guild. Requires no permissions or authentication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_guild_widget_png" method="get" path="/guilds/{guild_id}/widget.png" -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.guilds.getWidgetPng({
    guildId: "<value>",
    style: "shield",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DiscordCore } from "@ryan.blunden/discord-sdk/core.js";
import { guildsGetWidgetPng } from "@ryan.blunden/discord-sdk/funcs/guildsGetWidgetPng.js";

// Use `DiscordCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const discord = new DiscordCore({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const res = await guildsGetWidgetPng(discord, {
    guildId: "<value>",
    style: "shield",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("guildsGetWidgetPng failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetGuildWidgetPngRequest](../../models/operations/getguildwidgetpngrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetGuildWidgetPngResponse](../../models/operations/getguildwidgetpngresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.RatelimitedResponse | 429                        | application/json           |
| errors.ErrorResponse       | 4XX                        | application/json           |
| errors.APIError            | 5XX                        | \*/\*                      |