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

Discord HTTP API (Preview): Preview of the Discord v10 HTTP API specification. See https://discord.com/developers/docs for more details.

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

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  });

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
  const result = await discord.oauth2.getMyApplication();

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
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
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

### [answers](docs/sdks/answers/README.md)

* [getVoters](docs/sdks/answers/README.md#getvoters)

### [applications](docs/sdks/applications/README.md)

* [getMe](docs/sdks/applications/README.md#getme)
* [updateSelf](docs/sdks/applications/README.md#updateself)
* [setGuildCommandPermissions](docs/sdks/applications/README.md#setguildcommandpermissions)
* [deleteUserRoleConnection](docs/sdks/applications/README.md#deleteuserroleconnection)
* [getRoleConnectionsMetadata](docs/sdks/applications/README.md#getroleconnectionsmetadata)
* [updateRoleConnectionsMetadata](docs/sdks/applications/README.md#updateroleconnectionsmetadata)
* [consumeEntitlement](docs/sdks/applications/README.md#consumeentitlement)
* [createGuildCommand](docs/sdks/applications/README.md#createguildcommand)
* [getActivityInstance](docs/sdks/applications/README.md#getactivityinstance)
* [getEntitlement](docs/sdks/applications/README.md#getentitlement)
* [deleteEntitlement](docs/sdks/applications/README.md#deleteentitlement)
* [getEntitlements](docs/sdks/applications/README.md#getentitlements)
* [createEntitlement](docs/sdks/applications/README.md#createentitlement)
* [uploadAttachment](docs/sdks/applications/README.md#uploadattachment)
* [getCommand](docs/sdks/applications/README.md#getcommand)
* [deleteCommand](docs/sdks/applications/README.md#deletecommand)
* [listCommands](docs/sdks/applications/README.md#listcommands)
* [bulkSetCommands](docs/sdks/applications/README.md#bulksetcommands)
* [getEmoji](docs/sdks/applications/README.md#getemoji)
* [updateEmoji](docs/sdks/applications/README.md#updateemoji)
* [listEmojis](docs/sdks/applications/README.md#listemojis)
* [get](docs/sdks/applications/README.md#get)
* [update](docs/sdks/applications/README.md#update)

#### [applications.commands](docs/sdks/commands/README.md)

* [update](docs/sdks/commands/README.md#update)

#### [applications.emojis](docs/sdks/emojis/README.md)

* [delete](docs/sdks/emojis/README.md#delete)
* [create](docs/sdks/emojis/README.md#create)

#### [applications.guilds](docs/sdks/discordguilds/README.md)

* [listCommandPermissions](docs/sdks/discordguilds/README.md#listcommandpermissions)
* [getCommandPermissions](docs/sdks/discordguilds/README.md#getcommandpermissions)

### [applicationsCommands](docs/sdks/applicationscommands/README.md)

* [create](docs/sdks/applicationscommands/README.md#create)

### [applicationUserRoleConnection](docs/sdks/applicationuserroleconnection/README.md)

* [update](docs/sdks/applicationuserroleconnection/README.md#update)

### [applicationUserRoleConnections](docs/sdks/applicationuserroleconnections/README.md)

* [get](docs/sdks/applicationuserroleconnections/README.md#get)

### [autoModerationRules](docs/sdks/automoderationrules/README.md)

* [get](docs/sdks/automoderationrules/README.md#get)
* [delete](docs/sdks/automoderationrules/README.md#delete)
* [create](docs/sdks/automoderationrules/README.md#create)

### [channelPermissions](docs/sdks/channelpermissions/README.md)

* [deleteOverwrite](docs/sdks/channelpermissions/README.md#deleteoverwrite)

### [channels](docs/sdks/channels/README.md)

* [listMyPrivateArchivedThreads](docs/sdks/channels/README.md#listmyprivatearchivedthreads)
* [listPrivateArchivedThreads](docs/sdks/channels/README.md#listprivatearchivedthreads)
* [deleteUserMessageReaction](docs/sdks/channels/README.md#deleteusermessagereaction)
* [crosspostMessage](docs/sdks/channels/README.md#crosspostmessage)
* [startThreadFromMessage](docs/sdks/channels/README.md#startthreadfrommessage)
* [expirePoll](docs/sdks/channels/README.md#expirepoll)
* [sendSoundboardSound](docs/sdks/channels/README.md#sendsoundboardsound)
* [getThreadMember](docs/sdks/channels/README.md#getthreadmember)
* [addThreadMember](docs/sdks/channels/README.md#addthreadmember)
* [listThreadMembers](docs/sdks/channels/README.md#listthreadmembers)
* [deleteDmUser](docs/sdks/channels/README.md#deletedmuser)
* [follow](docs/sdks/channels/README.md#follow)
* [deleteMessage](docs/sdks/channels/README.md#deletemessage)
* [listWebhooks](docs/sdks/channels/README.md#listwebhooks)
* [createWebhook](docs/sdks/channels/README.md#createwebhook)
* [listInvites](docs/sdks/channels/README.md#listinvites)
* [createInvite](docs/sdks/channels/README.md#createinvite)
* [triggerTyping](docs/sdks/channels/README.md#triggertyping)
* [pinMessage](docs/sdks/channels/README.md#pinmessage)
* [listPinnedMessages](docs/sdks/channels/README.md#listpinnedmessages)
* [get](docs/sdks/channels/README.md#get)
* [delete](docs/sdks/channels/README.md#delete)
* [update](docs/sdks/channels/README.md#update)

#### [channels.messages](docs/sdks/discordmessages/README.md)

* [deleteMyReaction](docs/sdks/discordmessages/README.md#deletemyreaction)
* [bulkDelete](docs/sdks/discordmessages/README.md#bulkdelete)
* [deleteAllReactions](docs/sdks/discordmessages/README.md#deleteallreactions)
* [get](docs/sdks/discordmessages/README.md#get)
* [updateJson](docs/sdks/discordmessages/README.md#updatejson)
* [updateForm](docs/sdks/discordmessages/README.md#updateform)
* [updateMultipart](docs/sdks/discordmessages/README.md#updatemultipart)
* [list](docs/sdks/discordmessages/README.md#list)
* [createJson](docs/sdks/discordmessages/README.md#createjson)
* [createForm](docs/sdks/discordmessages/README.md#createform)
* [createMultipart](docs/sdks/discordmessages/README.md#createmultipart)

#### [channels.messages.reactions](docs/sdks/reactions/README.md)

* [add](docs/sdks/reactions/README.md#add)

#### [channels.permissions](docs/sdks/permissions/README.md)

* [setOverwrite](docs/sdks/permissions/README.md#setoverwrite)

#### [channels.pins](docs/sdks/pins/README.md)

* [unpin](docs/sdks/pins/README.md#unpin)

#### [channels.threadMembers](docs/sdks/discordthreadmembers/README.md)

* [leave](docs/sdks/discordthreadmembers/README.md#leave)

#### [channels.threads](docs/sdks/discordthreads/README.md)

* [create](docs/sdks/discordthreads/README.md#create)

### [channelsRecipients](docs/sdks/channelsrecipients/README.md)

* [addGroupDmUser](docs/sdks/channelsrecipients/README.md#addgroupdmuser)

### [channelsThreadMembers](docs/sdks/channelsthreadmembers/README.md)

* [join](docs/sdks/channelsthreadmembers/README.md#join)

### [Discord SDK](docs/sdks/discord/README.md)

* [getOpenidConnectUserinfo](docs/sdks/discord/README.md#getopenidconnectuserinfo)

### [gateway](docs/sdks/gateway/README.md)

* [getBot](docs/sdks/gateway/README.md#getbot)
* [get](docs/sdks/gateway/README.md#get)

### [guildApplicationCommands](docs/sdks/guildapplicationcommands/README.md)

* [delete](docs/sdks/guildapplicationcommands/README.md#delete)
* [list](docs/sdks/guildapplicationcommands/README.md#list)
* [update](docs/sdks/guildapplicationcommands/README.md#update)
* [bulkSet](docs/sdks/guildapplicationcommands/README.md#bulkset)

### [guildBans](docs/sdks/guildbans/README.md)

* [bulkBan](docs/sdks/guildbans/README.md#bulkban)
* [get](docs/sdks/guildbans/README.md#get)
* [list](docs/sdks/guildbans/README.md#list)

### [guildCommands](docs/sdks/guildcommands/README.md)

* [get](docs/sdks/guildcommands/README.md#get)

### [guildEmojis](docs/sdks/guildemojis/README.md)

* [get](docs/sdks/guildemojis/README.md#get)

### [guildIntegrations](docs/sdks/guildintegrations/README.md)

* [delete](docs/sdks/guildintegrations/README.md#delete)

### [guildMemberRoles](docs/sdks/guildmemberroles/README.md)

* [add](docs/sdks/guildmemberroles/README.md#add)
* [delete](docs/sdks/guildmemberroles/README.md#delete)

### [guildMembers](docs/sdks/guildmembers/README.md)

* [add](docs/sdks/guildmembers/README.md#add)

### [guildOnboarding](docs/sdks/guildonboarding/README.md)

* [get](docs/sdks/guildonboarding/README.md#get)
* [update](docs/sdks/guildonboarding/README.md#update)

### [guildRoles](docs/sdks/guildroles/README.md)

* [bulkUpdate](docs/sdks/guildroles/README.md#bulkupdate)

### [guilds](docs/sdks/guilds/README.md)

* [create](docs/sdks/guilds/README.md#create)
* [getMyMember](docs/sdks/guilds/README.md#getmymember)
* [listAutoModerationRules](docs/sdks/guilds/README.md#listautomoderationrules)
* [searchMembers](docs/sdks/guilds/README.md#searchmembers)
* [getTemplate](docs/sdks/guilds/README.md#gettemplate)
* [getNewMemberWelcome](docs/sdks/guilds/README.md#getnewmemberwelcome)
* [getSoundboardSound](docs/sdks/guilds/README.md#getsoundboardsound)
* [createSoundboardSound](docs/sdks/guilds/README.md#createsoundboardsound)
* [getWelcomeScreen](docs/sdks/guilds/README.md#getwelcomescreen)
* [updateWelcomeScreen](docs/sdks/guilds/README.md#updatewelcomescreen)
* [getVoiceState](docs/sdks/guilds/README.md#getvoicestate)
* [getWidget](docs/sdks/guilds/README.md#getwidget)
* [getVanityUrl](docs/sdks/guilds/README.md#getvanityurl)
* [listAuditLogs](docs/sdks/guilds/README.md#listauditlogs)
* [getWidgetPng](docs/sdks/guilds/README.md#getwidgetpng)
* [syncTemplate](docs/sdks/guilds/README.md#synctemplate)
* [updateTemplate](docs/sdks/guilds/README.md#updatetemplate)
* [listTemplates](docs/sdks/guilds/README.md#listtemplates)
* [getSticker](docs/sdks/guilds/README.md#getsticker)
* [deleteSticker](docs/sdks/guilds/README.md#deletesticker)
* [createSticker](docs/sdks/guilds/README.md#createsticker)
* [listWebhooks](docs/sdks/guilds/README.md#listwebhooks)
* [listChannels](docs/sdks/guilds/README.md#listchannels)
* [deleteMember](docs/sdks/guilds/README.md#deletemember)
* [listMembers](docs/sdks/guilds/README.md#listmembers)
* [getPreview](docs/sdks/guilds/README.md#getpreview)
* [listInvites](docs/sdks/guilds/README.md#listinvites)
* [deleteEmoji](docs/sdks/guilds/README.md#deleteemoji)
* [updateEmoji](docs/sdks/guilds/README.md#updateemoji)
* [listEmojis](docs/sdks/guilds/README.md#listemojis)
* [createEmoji](docs/sdks/guilds/README.md#createemoji)
* [getWidgetSettings](docs/sdks/guilds/README.md#getwidgetsettings)
* [getRole](docs/sdks/guilds/README.md#getrole)
* [deleteRole](docs/sdks/guilds/README.md#deleterole)
* [updateRole](docs/sdks/guilds/README.md#updaterole)
* [listRoles](docs/sdks/guilds/README.md#listroles)
* [createRole](docs/sdks/guilds/README.md#createrole)
* [previewPrune](docs/sdks/guilds/README.md#previewprune)
* [prune](docs/sdks/guilds/README.md#prune)
* [banUser](docs/sdks/guilds/README.md#banuser)
* [unbanUser](docs/sdks/guilds/README.md#unbanuser)
* [get](docs/sdks/guilds/README.md#get)
* [delete](docs/sdks/guilds/README.md#delete)
* [update](docs/sdks/guilds/README.md#update)

#### [guilds.autoModeration](docs/sdks/automoderation/README.md)


#### [guilds.autoModeration.rules](docs/sdks/rules/README.md)

* [update](docs/sdks/rules/README.md#update)

#### [guilds.channels](docs/sdks/discordchannels/README.md)

* [bulkUpdate](docs/sdks/discordchannels/README.md#bulkupdate)

#### [guilds.integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list)

#### [guilds.mfa](docs/sdks/mfa/README.md)

* [setLevel](docs/sdks/mfa/README.md#setlevel)

#### [guilds.scheduledEvents](docs/sdks/discordguildsscheduledevents/README.md)

* [get](docs/sdks/discordguildsscheduledevents/README.md#get)
* [list](docs/sdks/discordguildsscheduledevents/README.md#list)
* [update](docs/sdks/discordguildsscheduledevents/README.md#update)

#### [guilds.scheduledEvents.users](docs/sdks/discordusers/README.md)

* [list](docs/sdks/discordusers/README.md#list)

#### [guilds.soundboardSounds](docs/sdks/soundboardsounds/README.md)

* [update](docs/sdks/soundboardsounds/README.md#update)

#### [guilds.stickers](docs/sdks/discordstickers/README.md)

* [update](docs/sdks/discordstickers/README.md#update)

#### [guilds.templates](docs/sdks/templates/README.md)

* [delete](docs/sdks/templates/README.md#delete)
* [create](docs/sdks/templates/README.md#create)

#### [guilds.voiceStates](docs/sdks/voicestates/README.md)

* [getSelf](docs/sdks/voicestates/README.md#getself)
* [updateSelf](docs/sdks/voicestates/README.md#updateself)
* [update](docs/sdks/voicestates/README.md#update)

### [guildsChannels](docs/sdks/guildschannels/README.md)

* [create](docs/sdks/guildschannels/README.md#create)

### [guildScheduledEvents](docs/sdks/guildscheduledevents/README.md)

* [delete](docs/sdks/guildscheduledevents/README.md#delete)

### [guildsMembers](docs/sdks/guildsmembers/README.md)

* [updateMe](docs/sdks/guildsmembers/README.md#updateme)
* [get](docs/sdks/guildsmembers/README.md#get)
* [update](docs/sdks/guildsmembers/README.md#update)

### [guildSoundboardSounds](docs/sdks/guildsoundboardsounds/README.md)

* [delete](docs/sdks/guildsoundboardsounds/README.md#delete)

### [guildsSoundboardSounds](docs/sdks/guildssoundboardsounds/README.md)

* [list](docs/sdks/guildssoundboardsounds/README.md#list)

### [guildStickers](docs/sdks/guildstickers/README.md)

* [list](docs/sdks/guildstickers/README.md#list)

### [guildTemplates](docs/sdks/guildtemplates/README.md)

* [createFromCode](docs/sdks/guildtemplates/README.md#createfromcode)

### [guildThreads](docs/sdks/guildthreads/README.md)

* [getActive](docs/sdks/guildthreads/README.md#getactive)

### [guildVoiceRegions](docs/sdks/guildvoiceregions/README.md)

* [list](docs/sdks/guildvoiceregions/README.md#list)

### [guildWidgetSettings](docs/sdks/guildwidgetsettings/README.md)

* [update](docs/sdks/guildwidgetsettings/README.md#update)

### [invites](docs/sdks/invites/README.md)

* [resolve](docs/sdks/invites/README.md#resolve)
* [revoke](docs/sdks/invites/README.md#revoke)

### [messageReactions](docs/sdks/messagereactions/README.md)

* [deleteAllByEmoji](docs/sdks/messagereactions/README.md#deleteallbyemoji)

### [messages](docs/sdks/messages/README.md)

* [listReactionsByEmoji](docs/sdks/messages/README.md#listreactionsbyemoji)

### [oauth2](docs/sdks/oauth2/README.md)

* [getMyApplication](docs/sdks/oauth2/README.md#getmyapplication)
* [getKeys](docs/sdks/oauth2/README.md#getkeys)
* [getAuthorization](docs/sdks/oauth2/README.md#getauthorization)

### [scheduledEvents](docs/sdks/scheduledevents/README.md)

* [create](docs/sdks/scheduledevents/README.md#create)

### [soundboard](docs/sdks/soundboard/README.md)

* [getDefaultSounds](docs/sdks/soundboard/README.md#getdefaultsounds)

### [stageInstances](docs/sdks/stageinstances/README.md)

* [create](docs/sdks/stageinstances/README.md#create)
* [get](docs/sdks/stageinstances/README.md#get)
* [delete](docs/sdks/stageinstances/README.md#delete)
* [update](docs/sdks/stageinstances/README.md#update)

### [stickerPacks](docs/sdks/stickerpacks/README.md)

* [list](docs/sdks/stickerpacks/README.md#list)
* [get](docs/sdks/stickerpacks/README.md#get)

### [stickers](docs/sdks/stickers/README.md)

* [get](docs/sdks/stickers/README.md#get)

### [threadMembers](docs/sdks/threadmembers/README.md)

* [delete](docs/sdks/threadmembers/README.md#delete)

### [threads](docs/sdks/threads/README.md)

* [listPublicArchived](docs/sdks/threads/README.md#listpublicarchived)

### [users](docs/sdks/users/README.md)

* [listMyConnections](docs/sdks/users/README.md#listmyconnections)
* [createDm](docs/sdks/users/README.md#createdm)
* [listMyGuilds](docs/sdks/users/README.md#listmyguilds)
* [getMe](docs/sdks/users/README.md#getme)
* [updateMe](docs/sdks/users/README.md#updateme)
* [get](docs/sdks/users/README.md#get)

#### [users.guilds](docs/sdks/discordusersguilds/README.md)

* [leave](docs/sdks/discordusersguilds/README.md#leave)

### [voice](docs/sdks/voice/README.md)

* [listRegions](docs/sdks/voice/README.md#listregions)

### [webhookMessages](docs/sdks/webhookmessages/README.md)

* [getOriginal](docs/sdks/webhookmessages/README.md#getoriginal)

### [webhooks](docs/sdks/webhooks/README.md)

* [deleteOriginalMessage](docs/sdks/webhooks/README.md#deleteoriginalmessage)
* [updateOriginalMessageJson](docs/sdks/webhooks/README.md#updateoriginalmessagejson)
* [updateOriginalMessageForm](docs/sdks/webhooks/README.md#updateoriginalmessageform)
* [updateOriginalMessageMultipart](docs/sdks/webhooks/README.md#updateoriginalmessagemultipart)
* [getMessage](docs/sdks/webhooks/README.md#getmessage)
* [updateMessageJson](docs/sdks/webhooks/README.md#updatemessagejson)
* [updateMessageForm](docs/sdks/webhooks/README.md#updatemessageform)
* [updateMessageMultipart](docs/sdks/webhooks/README.md#updatemessagemultipart)
* [executeGithubCompatible](docs/sdks/webhooks/README.md#executegithubcompatible)
* [executeSlackCompatible](docs/sdks/webhooks/README.md#executeslackcompatible)
* [getByToken](docs/sdks/webhooks/README.md#getbytoken)
* [deleteByToken](docs/sdks/webhooks/README.md#deletebytoken)
* [updateByToken](docs/sdks/webhooks/README.md#updatebytoken)
* [get](docs/sdks/webhooks/README.md#get)
* [delete](docs/sdks/webhooks/README.md#delete)
* [update](docs/sdks/webhooks/README.md#update)

#### [webhooks.messages](docs/sdks/discordwebhooksmessages/README.md)

* [delete](docs/sdks/discordwebhooksmessages/README.md#delete)

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

- [`answersGetVoters`](docs/sdks/answers/README.md#getvoters)
- [`applicationsBulkSetCommands`](docs/sdks/applications/README.md#bulksetcommands)
- [`applicationsCommandsCreate`](docs/sdks/applicationscommands/README.md#create)
- [`applicationsCommandsUpdate`](docs/sdks/commands/README.md#update)
- [`applicationsConsumeEntitlement`](docs/sdks/applications/README.md#consumeentitlement)
- [`applicationsCreateEntitlement`](docs/sdks/applications/README.md#createentitlement)
- [`applicationsCreateGuildCommand`](docs/sdks/applications/README.md#createguildcommand)
- [`applicationsDeleteCommand`](docs/sdks/applications/README.md#deletecommand)
- [`applicationsDeleteEntitlement`](docs/sdks/applications/README.md#deleteentitlement)
- [`applicationsDeleteUserRoleConnection`](docs/sdks/applications/README.md#deleteuserroleconnection)
- [`applicationsEmojisCreate`](docs/sdks/emojis/README.md#create)
- [`applicationsEmojisDelete`](docs/sdks/emojis/README.md#delete)
- [`applicationsGet`](docs/sdks/applications/README.md#get)
- [`applicationsGetActivityInstance`](docs/sdks/applications/README.md#getactivityinstance)
- [`applicationsGetCommand`](docs/sdks/applications/README.md#getcommand)
- [`applicationsGetEmoji`](docs/sdks/applications/README.md#getemoji)
- [`applicationsGetEntitlement`](docs/sdks/applications/README.md#getentitlement)
- [`applicationsGetEntitlements`](docs/sdks/applications/README.md#getentitlements)
- [`applicationsGetMe`](docs/sdks/applications/README.md#getme)
- [`applicationsGetRoleConnectionsMetadata`](docs/sdks/applications/README.md#getroleconnectionsmetadata)
- [`applicationsGuildsGetCommandPermissions`](docs/sdks/discordguilds/README.md#getcommandpermissions)
- [`applicationsGuildsListCommandPermissions`](docs/sdks/discordguilds/README.md#listcommandpermissions)
- [`applicationsListCommands`](docs/sdks/applications/README.md#listcommands)
- [`applicationsListEmojis`](docs/sdks/applications/README.md#listemojis)
- [`applicationsSetGuildCommandPermissions`](docs/sdks/applications/README.md#setguildcommandpermissions)
- [`applicationsUpdate`](docs/sdks/applications/README.md#update)
- [`applicationsUpdateEmoji`](docs/sdks/applications/README.md#updateemoji)
- [`applicationsUpdateRoleConnectionsMetadata`](docs/sdks/applications/README.md#updateroleconnectionsmetadata)
- [`applicationsUpdateSelf`](docs/sdks/applications/README.md#updateself)
- [`applicationsUploadAttachment`](docs/sdks/applications/README.md#uploadattachment)
- [`applicationUserRoleConnectionsGet`](docs/sdks/applicationuserroleconnections/README.md#get)
- [`applicationUserRoleConnectionUpdate`](docs/sdks/applicationuserroleconnection/README.md#update)
- [`autoModerationRulesCreate`](docs/sdks/automoderationrules/README.md#create)
- [`autoModerationRulesDelete`](docs/sdks/automoderationrules/README.md#delete)
- [`autoModerationRulesGet`](docs/sdks/automoderationrules/README.md#get)
- [`channelPermissionsDeleteOverwrite`](docs/sdks/channelpermissions/README.md#deleteoverwrite)
- [`channelsAddThreadMember`](docs/sdks/channels/README.md#addthreadmember)
- [`channelsCreateInvite`](docs/sdks/channels/README.md#createinvite)
- [`channelsCreateWebhook`](docs/sdks/channels/README.md#createwebhook)
- [`channelsCrosspostMessage`](docs/sdks/channels/README.md#crosspostmessage)
- [`channelsDelete`](docs/sdks/channels/README.md#delete)
- [`channelsDeleteDmUser`](docs/sdks/channels/README.md#deletedmuser)
- [`channelsDeleteMessage`](docs/sdks/channels/README.md#deletemessage)
- [`channelsDeleteUserMessageReaction`](docs/sdks/channels/README.md#deleteusermessagereaction)
- [`channelsExpirePoll`](docs/sdks/channels/README.md#expirepoll)
- [`channelsFollow`](docs/sdks/channels/README.md#follow)
- [`channelsGet`](docs/sdks/channels/README.md#get)
- [`channelsGetThreadMember`](docs/sdks/channels/README.md#getthreadmember)
- [`channelsListInvites`](docs/sdks/channels/README.md#listinvites)
- [`channelsListMyPrivateArchivedThreads`](docs/sdks/channels/README.md#listmyprivatearchivedthreads)
- [`channelsListPinnedMessages`](docs/sdks/channels/README.md#listpinnedmessages)
- [`channelsListPrivateArchivedThreads`](docs/sdks/channels/README.md#listprivatearchivedthreads)
- [`channelsListThreadMembers`](docs/sdks/channels/README.md#listthreadmembers)
- [`channelsListWebhooks`](docs/sdks/channels/README.md#listwebhooks)
- [`channelsMessagesBulkDelete`](docs/sdks/discordmessages/README.md#bulkdelete)
- [`channelsMessagesCreateForm`](docs/sdks/discordmessages/README.md#createform)
- [`channelsMessagesCreateJson`](docs/sdks/discordmessages/README.md#createjson)
- [`channelsMessagesCreateMultipart`](docs/sdks/discordmessages/README.md#createmultipart)
- [`channelsMessagesDeleteAllReactions`](docs/sdks/discordmessages/README.md#deleteallreactions)
- [`channelsMessagesDeleteMyReaction`](docs/sdks/discordmessages/README.md#deletemyreaction)
- [`channelsMessagesGet`](docs/sdks/discordmessages/README.md#get)
- [`channelsMessagesList`](docs/sdks/discordmessages/README.md#list)
- [`channelsMessagesReactionsAdd`](docs/sdks/reactions/README.md#add)
- [`channelsMessagesUpdateForm`](docs/sdks/discordmessages/README.md#updateform)
- [`channelsMessagesUpdateJson`](docs/sdks/discordmessages/README.md#updatejson)
- [`channelsMessagesUpdateMultipart`](docs/sdks/discordmessages/README.md#updatemultipart)
- [`channelsPermissionsSetOverwrite`](docs/sdks/permissions/README.md#setoverwrite)
- [`channelsPinMessage`](docs/sdks/channels/README.md#pinmessage)
- [`channelsPinsUnpin`](docs/sdks/pins/README.md#unpin)
- [`channelsRecipientsAddGroupDmUser`](docs/sdks/channelsrecipients/README.md#addgroupdmuser)
- [`channelsSendSoundboardSound`](docs/sdks/channels/README.md#sendsoundboardsound)
- [`channelsStartThreadFromMessage`](docs/sdks/channels/README.md#startthreadfrommessage)
- [`channelsThreadMembersJoin`](docs/sdks/channelsthreadmembers/README.md#join)
- [`channelsThreadMembersLeave`](docs/sdks/discordthreadmembers/README.md#leave)
- [`channelsThreadsCreate`](docs/sdks/discordthreads/README.md#create)
- [`channelsTriggerTyping`](docs/sdks/channels/README.md#triggertyping)
- [`channelsUpdate`](docs/sdks/channels/README.md#update)
- [`gatewayGet`](docs/sdks/gateway/README.md#get)
- [`gatewayGetBot`](docs/sdks/gateway/README.md#getbot)
- [`getOpenidConnectUserinfo`](docs/sdks/discord/README.md#getopenidconnectuserinfo)
- [`guildApplicationCommandsBulkSet`](docs/sdks/guildapplicationcommands/README.md#bulkset)
- [`guildApplicationCommandsDelete`](docs/sdks/guildapplicationcommands/README.md#delete)
- [`guildApplicationCommandsList`](docs/sdks/guildapplicationcommands/README.md#list)
- [`guildApplicationCommandsUpdate`](docs/sdks/guildapplicationcommands/README.md#update)
- [`guildBansBulkBan`](docs/sdks/guildbans/README.md#bulkban)
- [`guildBansGet`](docs/sdks/guildbans/README.md#get)
- [`guildBansList`](docs/sdks/guildbans/README.md#list)
- [`guildCommandsGet`](docs/sdks/guildcommands/README.md#get)
- [`guildEmojisGet`](docs/sdks/guildemojis/README.md#get)
- [`guildIntegrationsDelete`](docs/sdks/guildintegrations/README.md#delete)
- [`guildMemberRolesAdd`](docs/sdks/guildmemberroles/README.md#add)
- [`guildMemberRolesDelete`](docs/sdks/guildmemberroles/README.md#delete)
- [`guildMembersAdd`](docs/sdks/guildmembers/README.md#add)
- [`guildOnboardingGet`](docs/sdks/guildonboarding/README.md#get)
- [`guildOnboardingUpdate`](docs/sdks/guildonboarding/README.md#update)
- [`guildRolesBulkUpdate`](docs/sdks/guildroles/README.md#bulkupdate)
- [`guildsAutoModerationRulesUpdate`](docs/sdks/rules/README.md#update)
- [`guildsBanUser`](docs/sdks/guilds/README.md#banuser)
- [`guildsChannelsBulkUpdate`](docs/sdks/discordchannels/README.md#bulkupdate)
- [`guildsChannelsCreate`](docs/sdks/guildschannels/README.md#create)
- [`guildScheduledEventsDelete`](docs/sdks/guildscheduledevents/README.md#delete)
- [`guildsCreate`](docs/sdks/guilds/README.md#create)
- [`guildsCreateEmoji`](docs/sdks/guilds/README.md#createemoji)
- [`guildsCreateRole`](docs/sdks/guilds/README.md#createrole)
- [`guildsCreateSoundboardSound`](docs/sdks/guilds/README.md#createsoundboardsound)
- [`guildsCreateSticker`](docs/sdks/guilds/README.md#createsticker)
- [`guildsDelete`](docs/sdks/guilds/README.md#delete)
- [`guildsDeleteEmoji`](docs/sdks/guilds/README.md#deleteemoji)
- [`guildsDeleteMember`](docs/sdks/guilds/README.md#deletemember)
- [`guildsDeleteRole`](docs/sdks/guilds/README.md#deleterole)
- [`guildsDeleteSticker`](docs/sdks/guilds/README.md#deletesticker)
- [`guildsGet`](docs/sdks/guilds/README.md#get)
- [`guildsGetMyMember`](docs/sdks/guilds/README.md#getmymember)
- [`guildsGetNewMemberWelcome`](docs/sdks/guilds/README.md#getnewmemberwelcome)
- [`guildsGetPreview`](docs/sdks/guilds/README.md#getpreview)
- [`guildsGetRole`](docs/sdks/guilds/README.md#getrole)
- [`guildsGetSoundboardSound`](docs/sdks/guilds/README.md#getsoundboardsound)
- [`guildsGetSticker`](docs/sdks/guilds/README.md#getsticker)
- [`guildsGetTemplate`](docs/sdks/guilds/README.md#gettemplate)
- [`guildsGetVanityUrl`](docs/sdks/guilds/README.md#getvanityurl)
- [`guildsGetVoiceState`](docs/sdks/guilds/README.md#getvoicestate)
- [`guildsGetWelcomeScreen`](docs/sdks/guilds/README.md#getwelcomescreen)
- [`guildsGetWidget`](docs/sdks/guilds/README.md#getwidget)
- [`guildsGetWidgetPng`](docs/sdks/guilds/README.md#getwidgetpng)
- [`guildsGetWidgetSettings`](docs/sdks/guilds/README.md#getwidgetsettings)
- [`guildsIntegrationsList`](docs/sdks/integrations/README.md#list)
- [`guildsListAuditLogs`](docs/sdks/guilds/README.md#listauditlogs)
- [`guildsListAutoModerationRules`](docs/sdks/guilds/README.md#listautomoderationrules)
- [`guildsListChannels`](docs/sdks/guilds/README.md#listchannels)
- [`guildsListEmojis`](docs/sdks/guilds/README.md#listemojis)
- [`guildsListInvites`](docs/sdks/guilds/README.md#listinvites)
- [`guildsListMembers`](docs/sdks/guilds/README.md#listmembers)
- [`guildsListRoles`](docs/sdks/guilds/README.md#listroles)
- [`guildsListTemplates`](docs/sdks/guilds/README.md#listtemplates)
- [`guildsListWebhooks`](docs/sdks/guilds/README.md#listwebhooks)
- [`guildsMembersGet`](docs/sdks/guildsmembers/README.md#get)
- [`guildsMembersUpdate`](docs/sdks/guildsmembers/README.md#update)
- [`guildsMembersUpdateMe`](docs/sdks/guildsmembers/README.md#updateme)
- [`guildsMfaSetLevel`](docs/sdks/mfa/README.md#setlevel)
- [`guildSoundboardSoundsDelete`](docs/sdks/guildsoundboardsounds/README.md#delete)
- [`guildsPreviewPrune`](docs/sdks/guilds/README.md#previewprune)
- [`guildsPrune`](docs/sdks/guilds/README.md#prune)
- [`guildsScheduledEventsGet`](docs/sdks/discordguildsscheduledevents/README.md#get)
- [`guildsScheduledEventsList`](docs/sdks/discordguildsscheduledevents/README.md#list)
- [`guildsScheduledEventsUpdate`](docs/sdks/discordguildsscheduledevents/README.md#update)
- [`guildsScheduledEventsUsersList`](docs/sdks/discordusers/README.md#list)
- [`guildsSearchMembers`](docs/sdks/guilds/README.md#searchmembers)
- [`guildsSoundboardSoundsList`](docs/sdks/guildssoundboardsounds/README.md#list)
- [`guildsSoundboardSoundsUpdate`](docs/sdks/soundboardsounds/README.md#update)
- [`guildsStickersUpdate`](docs/sdks/discordstickers/README.md#update)
- [`guildsSyncTemplate`](docs/sdks/guilds/README.md#synctemplate)
- [`guildsTemplatesCreate`](docs/sdks/templates/README.md#create)
- [`guildsTemplatesDelete`](docs/sdks/templates/README.md#delete)
- [`guildStickersList`](docs/sdks/guildstickers/README.md#list)
- [`guildsUnbanUser`](docs/sdks/guilds/README.md#unbanuser)
- [`guildsUpdate`](docs/sdks/guilds/README.md#update)
- [`guildsUpdateEmoji`](docs/sdks/guilds/README.md#updateemoji)
- [`guildsUpdateRole`](docs/sdks/guilds/README.md#updaterole)
- [`guildsUpdateTemplate`](docs/sdks/guilds/README.md#updatetemplate)
- [`guildsUpdateWelcomeScreen`](docs/sdks/guilds/README.md#updatewelcomescreen)
- [`guildsVoiceStatesGetSelf`](docs/sdks/voicestates/README.md#getself)
- [`guildsVoiceStatesUpdate`](docs/sdks/voicestates/README.md#update)
- [`guildsVoiceStatesUpdateSelf`](docs/sdks/voicestates/README.md#updateself)
- [`guildTemplatesCreateFromCode`](docs/sdks/guildtemplates/README.md#createfromcode)
- [`guildThreadsGetActive`](docs/sdks/guildthreads/README.md#getactive)
- [`guildVoiceRegionsList`](docs/sdks/guildvoiceregions/README.md#list)
- [`guildWidgetSettingsUpdate`](docs/sdks/guildwidgetsettings/README.md#update)
- [`invitesResolve`](docs/sdks/invites/README.md#resolve)
- [`invitesRevoke`](docs/sdks/invites/README.md#revoke)
- [`messageReactionsDeleteAllByEmoji`](docs/sdks/messagereactions/README.md#deleteallbyemoji)
- [`messagesListReactionsByEmoji`](docs/sdks/messages/README.md#listreactionsbyemoji)
- [`oauth2GetAuthorization`](docs/sdks/oauth2/README.md#getauthorization)
- [`oauth2GetKeys`](docs/sdks/oauth2/README.md#getkeys)
- [`oauth2GetMyApplication`](docs/sdks/oauth2/README.md#getmyapplication)
- [`scheduledEventsCreate`](docs/sdks/scheduledevents/README.md#create)
- [`soundboardGetDefaultSounds`](docs/sdks/soundboard/README.md#getdefaultsounds)
- [`stageInstancesCreate`](docs/sdks/stageinstances/README.md#create)
- [`stageInstancesDelete`](docs/sdks/stageinstances/README.md#delete)
- [`stageInstancesGet`](docs/sdks/stageinstances/README.md#get)
- [`stageInstancesUpdate`](docs/sdks/stageinstances/README.md#update)
- [`stickerPacksGet`](docs/sdks/stickerpacks/README.md#get)
- [`stickerPacksList`](docs/sdks/stickerpacks/README.md#list)
- [`stickersGet`](docs/sdks/stickers/README.md#get)
- [`threadMembersDelete`](docs/sdks/threadmembers/README.md#delete)
- [`threadsListPublicArchived`](docs/sdks/threads/README.md#listpublicarchived)
- [`usersCreateDm`](docs/sdks/users/README.md#createdm)
- [`usersGet`](docs/sdks/users/README.md#get)
- [`usersGetMe`](docs/sdks/users/README.md#getme)
- [`usersGuildsLeave`](docs/sdks/discordusersguilds/README.md#leave)
- [`usersListMyConnections`](docs/sdks/users/README.md#listmyconnections)
- [`usersListMyGuilds`](docs/sdks/users/README.md#listmyguilds)
- [`usersUpdateMe`](docs/sdks/users/README.md#updateme)
- [`voiceListRegions`](docs/sdks/voice/README.md#listregions)
- [`webhookMessagesGetOriginal`](docs/sdks/webhookmessages/README.md#getoriginal)
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete)
- [`webhooksDeleteByToken`](docs/sdks/webhooks/README.md#deletebytoken)
- [`webhooksDeleteOriginalMessage`](docs/sdks/webhooks/README.md#deleteoriginalmessage)
- [`webhooksExecuteGithubCompatible`](docs/sdks/webhooks/README.md#executegithubcompatible)
- [`webhooksExecuteSlackCompatible`](docs/sdks/webhooks/README.md#executeslackcompatible)
- [`webhooksGet`](docs/sdks/webhooks/README.md#get)
- [`webhooksGetByToken`](docs/sdks/webhooks/README.md#getbytoken)
- [`webhooksGetMessage`](docs/sdks/webhooks/README.md#getmessage)
- [`webhooksMessagesDelete`](docs/sdks/discordwebhooksmessages/README.md#delete)
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update)
- [`webhooksUpdateByToken`](docs/sdks/webhooks/README.md#updatebytoken)
- [`webhooksUpdateMessageForm`](docs/sdks/webhooks/README.md#updatemessageform)
- [`webhooksUpdateMessageJson`](docs/sdks/webhooks/README.md#updatemessagejson)
- [`webhooksUpdateMessageMultipart`](docs/sdks/webhooks/README.md#updatemessagemultipart)
- [`webhooksUpdateOriginalMessageForm`](docs/sdks/webhooks/README.md#updateoriginalmessageform)
- [`webhooksUpdateOriginalMessageJson`](docs/sdks/webhooks/README.md#updateoriginalmessagejson)
- [`webhooksUpdateOriginalMessageMultipart`](docs/sdks/webhooks/README.md#updateoriginalmessagemultipart)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  }, {
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
});

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getOpenidConnectUserinfo` method may throw the following errors:

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

const discord = new Discord();

async function run() {
  let result;
  try {
    result = await discord.getOpenidConnectUserinfo({
      botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
    });

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

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  serverURL: "https://discord.com/api/v10",
});

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  });

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
