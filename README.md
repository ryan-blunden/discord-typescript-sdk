# discord-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *discord-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=discord-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/ryan-blunden-l5y/ryan-blunden). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Discord HTTP API (Preview): Preview of the Discord v10 HTTP API specification. See https://discord.com/developers/docs for more details.

For more information about the API: [Discord Developer Documentation](https://discord.com/developers/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [activityInstances](docs/sdks/activityinstances/README.md)

* [get](docs/sdks/activityinstances/README.md#get)

### [applicationAttachments](docs/sdks/applicationattachments/README.md)

* [upload](docs/sdks/applicationattachments/README.md#upload)

### [applicationCommands](docs/sdks/applicationcommands/README.md)

* [createForGuild](docs/sdks/applicationcommands/README.md#createforguild)
* [delete](docs/sdks/applicationcommands/README.md#delete)
* [bulkSet](docs/sdks/applicationcommands/README.md#bulkset)

### [applicationEmojis](docs/sdks/applicationemojis/README.md)

* [update](docs/sdks/applicationemojis/README.md#update)
* [create](docs/sdks/applicationemojis/README.md#create)

### [applicationRoleConnectionsMetadata](docs/sdks/applicationroleconnectionsmetadata/README.md)

* [get](docs/sdks/applicationroleconnectionsmetadata/README.md#get)

### [applications](docs/sdks/applications/README.md)

* [getMyApplication](docs/sdks/applications/README.md#getmyapplication)
* [updateMe](docs/sdks/applications/README.md#updateme)
* [getGuildCommandPermissions](docs/sdks/applications/README.md#getguildcommandpermissions)
* [setGuildCommandPermissions](docs/sdks/applications/README.md#setguildcommandpermissions)
* [getUserRoleConnection](docs/sdks/applications/README.md#getuserroleconnection)
* [deleteUserRoleConnection](docs/sdks/applications/README.md#deleteuserroleconnection)
* [updateRoleConnectionsMetadata](docs/sdks/applications/README.md#updateroleconnectionsmetadata)
* [consumeEntitlement](docs/sdks/applications/README.md#consumeentitlement)
* [getGuildCommand](docs/sdks/applications/README.md#getguildcommand)
* [deleteGuildCommand](docs/sdks/applications/README.md#deleteguildcommand)
* [listGuildCommands](docs/sdks/applications/README.md#listguildcommands)
* [getEntitlement](docs/sdks/applications/README.md#getentitlement)
* [deleteEntitlement](docs/sdks/applications/README.md#deleteentitlement)
* [getEntitlements](docs/sdks/applications/README.md#getentitlements)
* [updateCommand](docs/sdks/applications/README.md#updatecommand)
* [listCommands](docs/sdks/applications/README.md#listcommands)
* [deleteEmoji](docs/sdks/applications/README.md#deleteemoji)
* [get](docs/sdks/applications/README.md#get)
* [update](docs/sdks/applications/README.md#update)

#### [applications.commands](docs/sdks/commands/README.md)

* [get](docs/sdks/commands/README.md#get)
* [create](docs/sdks/commands/README.md#create)

#### [applications.emojis](docs/sdks/emojis/README.md)

* [get](docs/sdks/emojis/README.md#get)
* [list](docs/sdks/emojis/README.md#list)

### [applicationUserRoleConnections](docs/sdks/applicationuserroleconnections/README.md)

* [update](docs/sdks/applicationuserroleconnections/README.md#update)

### [autoModerationRules](docs/sdks/automoderationrules/README.md)

* [createRule](docs/sdks/automoderationrules/README.md#createrule)

### [channelInvites](docs/sdks/channelinvites/README.md)

* [create](docs/sdks/channelinvites/README.md#create)

### [channelMessages](docs/sdks/channelmessages/README.md)

* [updateJson](docs/sdks/channelmessages/README.md#updatejson)
* [updateForm](docs/sdks/channelmessages/README.md#updateform)
* [updateMultipart](docs/sdks/channelmessages/README.md#updatemultipart)

### [channelPermissions](docs/sdks/channelpermissions/README.md)

* [setOverwrite](docs/sdks/channelpermissions/README.md#setoverwrite)

### [channelPins](docs/sdks/channelpins/README.md)

* [list](docs/sdks/channelpins/README.md#list)

### [channels](docs/sdks/channels/README.md)

* [listMyPrivateArchivedThreads](docs/sdks/channels/README.md#listmyprivatearchivedthreads)
* [addMyMessageReaction](docs/sdks/channels/README.md#addmymessagereaction)
* [deleteMyMessageReaction](docs/sdks/channels/README.md#deletemymessagereaction)
* [listArchivedPublicThreads](docs/sdks/channels/README.md#listarchivedpublicthreads)
* [joinThread](docs/sdks/channels/README.md#jointhread)
* [leaveThread](docs/sdks/channels/README.md#leavethread)
* [bulkDeleteMessages](docs/sdks/channels/README.md#bulkdeletemessages)
* [deleteUserMessageReaction](docs/sdks/channels/README.md#deleteusermessagereaction)
* [listReactionsByEmoji](docs/sdks/channels/README.md#listreactionsbyemoji)
* [deleteAllMessageReactionsByEmoji](docs/sdks/channels/README.md#deleteallmessagereactionsbyemoji)
* [deleteAllMessageReactions](docs/sdks/channels/README.md#deleteallmessagereactions)
* [crosspostMessage](docs/sdks/channels/README.md#crosspostmessage)
* [getAnswerVoters](docs/sdks/channels/README.md#getanswervoters)
* [expirePoll](docs/sdks/channels/README.md#expirepoll)
* [sendSoundboardSound](docs/sdks/channels/README.md#sendsoundboardsound)
* [listThreadMembers](docs/sdks/channels/README.md#listthreadmembers)
* [deletePermissionOverwrite](docs/sdks/channels/README.md#deletepermissionoverwrite)
* [deleteGroupDmUser](docs/sdks/channels/README.md#deletegroupdmuser)
* [follow](docs/sdks/channels/README.md#follow)
* [getMessage](docs/sdks/channels/README.md#getmessage)
* [createMessageMultipart](docs/sdks/channels/README.md#createmessagemultipart)
* [createMessageJson](docs/sdks/channels/README.md#createmessagejson)
* [createMessageForm](docs/sdks/channels/README.md#createmessageform)
* [createThread](docs/sdks/channels/README.md#createthread)
* [triggerTyping](docs/sdks/channels/README.md#triggertyping)
* [pinMessage](docs/sdks/channels/README.md#pinmessage)
* [unpinMessage](docs/sdks/channels/README.md#unpinmessage)
* [get](docs/sdks/channels/README.md#get)
* [delete](docs/sdks/channels/README.md#delete)
* [update](docs/sdks/channels/README.md#update)

#### [channels.invites](docs/sdks/discordinvites/README.md)

* [list](docs/sdks/discordinvites/README.md#list)

#### [channels.messages](docs/sdks/messages/README.md)

* [delete](docs/sdks/messages/README.md#delete)
* [list](docs/sdks/messages/README.md#list)

#### [channels.threadMembers](docs/sdks/discordchannelsthreadmembers/README.md)

* [add](docs/sdks/discordchannelsthreadmembers/README.md#add)


#### [channels.threads.archived](docs/sdks/archived/README.md)


#### [channels.threads.archived.private](docs/sdks/private/README.md)

* [list](docs/sdks/private/README.md#list)

#### [channels.webhooks](docs/sdks/discordwebhooks/README.md)

* [create](docs/sdks/discordwebhooks/README.md#create)

### [channelWebhooks](docs/sdks/channelwebhooks/README.md)

* [list](docs/sdks/channelwebhooks/README.md#list)


### [dm](docs/sdks/dm/README.md)

* [create](docs/sdks/dm/README.md#create)

### [entitlements](docs/sdks/entitlements/README.md)

* [create](docs/sdks/entitlements/README.md#create)

### [gateway](docs/sdks/gateway/README.md)

* [get](docs/sdks/gateway/README.md#get)

#### [gateway.bot](docs/sdks/bot/README.md)

* [get](docs/sdks/bot/README.md#get)

### [groupDmUsers](docs/sdks/groupdmusers/README.md)

* [add](docs/sdks/groupdmusers/README.md#add)

### [guildBans](docs/sdks/guildbans/README.md)

* [get](docs/sdks/guildbans/README.md#get)

### [guildChannels](docs/sdks/guildchannels/README.md)

* [create](docs/sdks/guildchannels/README.md#create)

### [guildEmojis](docs/sdks/guildemojis/README.md)

* [get](docs/sdks/guildemojis/README.md#get)
* [delete](docs/sdks/guildemojis/README.md#delete)

### [guildIntegrations](docs/sdks/guildintegrations/README.md)

* [list](docs/sdks/guildintegrations/README.md#list)

### [guildInvites](docs/sdks/guildinvites/README.md)

* [list](docs/sdks/guildinvites/README.md#list)

### [guildMembers](docs/sdks/guildmembers/README.md)

* [get](docs/sdks/guildmembers/README.md#get)
* [add](docs/sdks/guildmembers/README.md#add)

### [guildPrune](docs/sdks/guildprune/README.md)

* [preview](docs/sdks/guildprune/README.md#preview)

### [guilds](docs/sdks/guilds/README.md)

* [create](docs/sdks/guilds/README.md#create)
* [getAutoModerationRule](docs/sdks/guilds/README.md#getautomoderationrule)
* [deleteAutoModerationRule](docs/sdks/guilds/README.md#deleteautomoderationrule)
* [updateAutoModerationRule](docs/sdks/guilds/README.md#updateautomoderationrule)
* [updateSelfVoiceState](docs/sdks/guilds/README.md#updateselfvoicestate)
* [searchMembers](docs/sdks/guilds/README.md#searchmembers)
* [updateMyMember](docs/sdks/guilds/README.md#updatemymember)
* [addMemberRole](docs/sdks/guilds/README.md#addmemberrole)
* [deleteMemberRole](docs/sdks/guilds/README.md#deletememberrole)
* [getNewMemberWelcome](docs/sdks/guilds/README.md#getnewmemberwelcome)
* [deleteSoundboardSound](docs/sdks/guilds/README.md#deletesoundboardsound)
* [listSoundboardSounds](docs/sdks/guilds/README.md#listsoundboardsounds)
* [createSoundboardSound](docs/sdks/guilds/README.md#createsoundboardsound)
* [deleteScheduledEvent](docs/sdks/guilds/README.md#deletescheduledevent)
* [createScheduledEvent](docs/sdks/guilds/README.md#createscheduledevent)
* [getWelcomeScreen](docs/sdks/guilds/README.md#getwelcomescreen)
* [updateWelcomeScreen](docs/sdks/guilds/README.md#updatewelcomescreen)
* [getWidget](docs/sdks/guilds/README.md#getwidget)
* [getOnboarding](docs/sdks/guilds/README.md#getonboarding)
* [updateOnboarding](docs/sdks/guilds/README.md#updateonboarding)
* [getVanityUrl](docs/sdks/guilds/README.md#getvanityurl)
* [getAuditLogEntries](docs/sdks/guilds/README.md#getauditlogentries)
* [getWidgetPng](docs/sdks/guilds/README.md#getwidgetpng)
* [listTemplates](docs/sdks/guilds/README.md#listtemplates)
* [createTemplate](docs/sdks/guilds/README.md#createtemplate)
* [deleteSticker](docs/sdks/guilds/README.md#deletesticker)
* [bulkBanUsers](docs/sdks/guilds/README.md#bulkbanusers)
* [listStickers](docs/sdks/guilds/README.md#liststickers)
* [listWebhooks](docs/sdks/guilds/README.md#listwebhooks)
* [listChannels](docs/sdks/guilds/README.md#listchannels)
* [updateChannels](docs/sdks/guilds/README.md#updatechannels)
* [updateMember](docs/sdks/guilds/README.md#updatemember)
* [listMembers](docs/sdks/guilds/README.md#listmembers)
* [getPreview](docs/sdks/guilds/README.md#getpreview)
* [updateEmoji](docs/sdks/guilds/README.md#updateemoji)
* [createEmoji](docs/sdks/guilds/README.md#createemoji)
* [getWidgetSettings](docs/sdks/guilds/README.md#getwidgetsettings)
* [updateWidgetSettings](docs/sdks/guilds/README.md#updatewidgetsettings)
* [getRole](docs/sdks/guilds/README.md#getrole)
* [deleteRole](docs/sdks/guilds/README.md#deleterole)
* [getRoles](docs/sdks/guilds/README.md#getroles)
* [createRole](docs/sdks/guilds/README.md#createrole)
* [bulkUpdateRoles](docs/sdks/guilds/README.md#bulkupdateroles)
* [prune](docs/sdks/guilds/README.md#prune)
* [banUser](docs/sdks/guilds/README.md#banuser)
* [unbanUser](docs/sdks/guilds/README.md#unbanuser)
* [listBans](docs/sdks/guilds/README.md#listbans)
* [setMfaLevel](docs/sdks/guilds/README.md#setmfalevel)
* [get](docs/sdks/guilds/README.md#get)
* [delete](docs/sdks/guilds/README.md#delete)
* [update](docs/sdks/guilds/README.md#update)

#### [guilds.applicationCommandPermissions](docs/sdks/applicationcommandpermissions/README.md)

* [list](docs/sdks/applicationcommandpermissions/README.md#list)

#### [guilds.applicationCommands](docs/sdks/discordapplicationcommands/README.md)

* [update](docs/sdks/discordapplicationcommands/README.md#update)
* [bulkSet](docs/sdks/discordapplicationcommands/README.md#bulkset)

#### [guilds.autoModerationRules](docs/sdks/discordautomoderationrules/README.md)

* [list](docs/sdks/discordautomoderationrules/README.md#list)

#### [guilds.emojis](docs/sdks/discordemojis/README.md)

* [list](docs/sdks/discordemojis/README.md#list)

#### [guilds.integrations](docs/sdks/integrations/README.md)

* [delete](docs/sdks/integrations/README.md#delete)

#### [guilds.members](docs/sdks/members/README.md)

* [delete](docs/sdks/members/README.md#delete)

#### [guilds.regions](docs/sdks/regions/README.md)

* [list](docs/sdks/regions/README.md#list)

#### [guilds.roles](docs/sdks/roles/README.md)

* [update](docs/sdks/roles/README.md#update)

#### [guilds.scheduledEvents](docs/sdks/scheduledevents/README.md)

* [update](docs/sdks/scheduledevents/README.md#update)

#### [guilds.templates](docs/sdks/templates/README.md)

* [get](docs/sdks/templates/README.md#get)
* [create](docs/sdks/templates/README.md#create)
* [update](docs/sdks/templates/README.md#update)

### [guildScheduledEvents](docs/sdks/guildscheduledevents/README.md)

* [get](docs/sdks/guildscheduledevents/README.md#get)
* [list](docs/sdks/guildscheduledevents/README.md#list)

### [guildScheduledEventUsers](docs/sdks/guildscheduledeventusers/README.md)

* [list](docs/sdks/guildscheduledeventusers/README.md#list)

### [guildSoundboardSounds](docs/sdks/guildsoundboardsounds/README.md)

* [get](docs/sdks/guildsoundboardsounds/README.md#get)
* [update](docs/sdks/guildsoundboardsounds/README.md#update)

### [guildStickers](docs/sdks/guildstickers/README.md)

* [get](docs/sdks/guildstickers/README.md#get)
* [create](docs/sdks/guildstickers/README.md#create)
* [update](docs/sdks/guildstickers/README.md#update)

### [guildTemplates](docs/sdks/guildtemplates/README.md)

* [sync](docs/sdks/guildtemplates/README.md#sync)
* [delete](docs/sdks/guildtemplates/README.md#delete)

### [guildThreads](docs/sdks/guildthreads/README.md)

* [getActive](docs/sdks/guildthreads/README.md#getactive)

### [invites](docs/sdks/invites/README.md)

* [resolve](docs/sdks/invites/README.md#resolve)
* [revoke](docs/sdks/invites/README.md#revoke)

### [messageThreads](docs/sdks/messagethreads/README.md)

* [create](docs/sdks/messagethreads/README.md#create)

### [myUser](docs/sdks/myuser/README.md)

* [update](docs/sdks/myuser/README.md#update)

### [oauth2](docs/sdks/oauth2/README.md)

* [getMyApplication](docs/sdks/oauth2/README.md#getmyapplication)
* [getKeys](docs/sdks/oauth2/README.md#getkeys)
* [getAuthorization](docs/sdks/oauth2/README.md#getauthorization)

### [soundboards](docs/sdks/soundboards/README.md)

* [getDefaultSounds](docs/sdks/soundboards/README.md#getdefaultsounds)

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

* [get](docs/sdks/threadmembers/README.md#get)
* [delete](docs/sdks/threadmembers/README.md#delete)

### [users](docs/sdks/users/README.md)

* [listConnections](docs/sdks/users/README.md#listconnections)
* [listGuilds](docs/sdks/users/README.md#listguilds)
* [getMe](docs/sdks/users/README.md#getme)
* [getMyGuildMember](docs/sdks/users/README.md#getmyguildmember)
* [get](docs/sdks/users/README.md#get)

#### [users.guilds](docs/sdks/discordguilds/README.md)

* [leave](docs/sdks/discordguilds/README.md#leave)

### [voice](docs/sdks/voice/README.md)

* [listRegions](docs/sdks/voice/README.md#listregions)

### [voiceStates](docs/sdks/voicestates/README.md)

* [getSelf](docs/sdks/voicestates/README.md#getself)
* [getForUser](docs/sdks/voicestates/README.md#getforuser)
* [update](docs/sdks/voicestates/README.md#update)

### [webhookMessages](docs/sdks/webhookmessages/README.md)

* [deleteOriginal](docs/sdks/webhookmessages/README.md#deleteoriginal)
* [updateJson](docs/sdks/webhookmessages/README.md#updatejson)
* [updateForm](docs/sdks/webhookmessages/README.md#updateform)
* [updateMultipart](docs/sdks/webhookmessages/README.md#updatemultipart)

### [webhooks](docs/sdks/webhooks/README.md)

* [getOriginalMessage](docs/sdks/webhooks/README.md#getoriginalmessage)
* [updateOriginalMessageForm](docs/sdks/webhooks/README.md#updateoriginalmessageform)
* [updateOriginalMessageMultipart](docs/sdks/webhooks/README.md#updateoriginalmessagemultipart)
* [updateOriginalMessageJson](docs/sdks/webhooks/README.md#updateoriginalmessagejson)
* [getMessage](docs/sdks/webhooks/README.md#getmessage)
* [executeSlackWebhook](docs/sdks/webhooks/README.md#executeslackwebhook)
* [getByToken](docs/sdks/webhooks/README.md#getbytoken)
* [deleteByToken](docs/sdks/webhooks/README.md#deletebytoken)
* [updateByToken](docs/sdks/webhooks/README.md#updatebytoken)
* [get](docs/sdks/webhooks/README.md#get)
* [delete](docs/sdks/webhooks/README.md#delete)
* [update](docs/sdks/webhooks/README.md#update)

#### [webhooks.github](docs/sdks/github/README.md)

* [execute](docs/sdks/github/README.md#execute)

#### [webhooks.messages](docs/sdks/discordmessages/README.md)

* [delete](docs/sdks/discordmessages/README.md#delete)

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

- [`activityInstancesGet`](docs/sdks/activityinstances/README.md#get)
- [`applicationAttachmentsUpload`](docs/sdks/applicationattachments/README.md#upload)
- [`applicationCommandsBulkSet`](docs/sdks/applicationcommands/README.md#bulkset)
- [`applicationCommandsCreateForGuild`](docs/sdks/applicationcommands/README.md#createforguild)
- [`applicationCommandsDelete`](docs/sdks/applicationcommands/README.md#delete)
- [`applicationEmojisCreate`](docs/sdks/applicationemojis/README.md#create)
- [`applicationEmojisUpdate`](docs/sdks/applicationemojis/README.md#update)
- [`applicationRoleConnectionsMetadataGet`](docs/sdks/applicationroleconnectionsmetadata/README.md#get)
- [`applicationsCommandsCreate`](docs/sdks/commands/README.md#create)
- [`applicationsCommandsGet`](docs/sdks/commands/README.md#get)
- [`applicationsConsumeEntitlement`](docs/sdks/applications/README.md#consumeentitlement)
- [`applicationsDeleteEmoji`](docs/sdks/applications/README.md#deleteemoji)
- [`applicationsDeleteEntitlement`](docs/sdks/applications/README.md#deleteentitlement)
- [`applicationsDeleteGuildCommand`](docs/sdks/applications/README.md#deleteguildcommand)
- [`applicationsDeleteUserRoleConnection`](docs/sdks/applications/README.md#deleteuserroleconnection)
- [`applicationsEmojisGet`](docs/sdks/emojis/README.md#get)
- [`applicationsEmojisList`](docs/sdks/emojis/README.md#list)
- [`applicationsGet`](docs/sdks/applications/README.md#get)
- [`applicationsGetEntitlement`](docs/sdks/applications/README.md#getentitlement)
- [`applicationsGetEntitlements`](docs/sdks/applications/README.md#getentitlements)
- [`applicationsGetGuildCommand`](docs/sdks/applications/README.md#getguildcommand)
- [`applicationsGetGuildCommandPermissions`](docs/sdks/applications/README.md#getguildcommandpermissions)
- [`applicationsGetMyApplication`](docs/sdks/applications/README.md#getmyapplication)
- [`applicationsGetUserRoleConnection`](docs/sdks/applications/README.md#getuserroleconnection)
- [`applicationsListCommands`](docs/sdks/applications/README.md#listcommands)
- [`applicationsListGuildCommands`](docs/sdks/applications/README.md#listguildcommands)
- [`applicationsSetGuildCommandPermissions`](docs/sdks/applications/README.md#setguildcommandpermissions)
- [`applicationsUpdate`](docs/sdks/applications/README.md#update)
- [`applicationsUpdateCommand`](docs/sdks/applications/README.md#updatecommand)
- [`applicationsUpdateMe`](docs/sdks/applications/README.md#updateme)
- [`applicationsUpdateRoleConnectionsMetadata`](docs/sdks/applications/README.md#updateroleconnectionsmetadata)
- [`applicationUserRoleConnectionsUpdate`](docs/sdks/applicationuserroleconnections/README.md#update)
- [`autoModerationRulesCreateRule`](docs/sdks/automoderationrules/README.md#createrule)
- [`channelInvitesCreate`](docs/sdks/channelinvites/README.md#create)
- [`channelMessagesUpdateForm`](docs/sdks/channelmessages/README.md#updateform)
- [`channelMessagesUpdateJson`](docs/sdks/channelmessages/README.md#updatejson)
- [`channelMessagesUpdateMultipart`](docs/sdks/channelmessages/README.md#updatemultipart)
- [`channelPermissionsSetOverwrite`](docs/sdks/channelpermissions/README.md#setoverwrite)
- [`channelPinsList`](docs/sdks/channelpins/README.md#list)
- [`channelsAddMyMessageReaction`](docs/sdks/channels/README.md#addmymessagereaction)
- [`channelsBulkDeleteMessages`](docs/sdks/channels/README.md#bulkdeletemessages)
- [`channelsCreateMessageForm`](docs/sdks/channels/README.md#createmessageform)
- [`channelsCreateMessageJson`](docs/sdks/channels/README.md#createmessagejson)
- [`channelsCreateMessageMultipart`](docs/sdks/channels/README.md#createmessagemultipart)
- [`channelsCreateThread`](docs/sdks/channels/README.md#createthread)
- [`channelsCrosspostMessage`](docs/sdks/channels/README.md#crosspostmessage)
- [`channelsDelete`](docs/sdks/channels/README.md#delete)
- [`channelsDeleteAllMessageReactions`](docs/sdks/channels/README.md#deleteallmessagereactions)
- [`channelsDeleteAllMessageReactionsByEmoji`](docs/sdks/channels/README.md#deleteallmessagereactionsbyemoji)
- [`channelsDeleteGroupDmUser`](docs/sdks/channels/README.md#deletegroupdmuser)
- [`channelsDeleteMyMessageReaction`](docs/sdks/channels/README.md#deletemymessagereaction)
- [`channelsDeletePermissionOverwrite`](docs/sdks/channels/README.md#deletepermissionoverwrite)
- [`channelsDeleteUserMessageReaction`](docs/sdks/channels/README.md#deleteusermessagereaction)
- [`channelsExpirePoll`](docs/sdks/channels/README.md#expirepoll)
- [`channelsFollow`](docs/sdks/channels/README.md#follow)
- [`channelsGet`](docs/sdks/channels/README.md#get)
- [`channelsGetAnswerVoters`](docs/sdks/channels/README.md#getanswervoters)
- [`channelsGetMessage`](docs/sdks/channels/README.md#getmessage)
- [`channelsInvitesList`](docs/sdks/discordinvites/README.md#list)
- [`channelsJoinThread`](docs/sdks/channels/README.md#jointhread)
- [`channelsLeaveThread`](docs/sdks/channels/README.md#leavethread)
- [`channelsListArchivedPublicThreads`](docs/sdks/channels/README.md#listarchivedpublicthreads)
- [`channelsListMyPrivateArchivedThreads`](docs/sdks/channels/README.md#listmyprivatearchivedthreads)
- [`channelsListReactionsByEmoji`](docs/sdks/channels/README.md#listreactionsbyemoji)
- [`channelsListThreadMembers`](docs/sdks/channels/README.md#listthreadmembers)
- [`channelsMessagesDelete`](docs/sdks/messages/README.md#delete)
- [`channelsMessagesList`](docs/sdks/messages/README.md#list)
- [`channelsPinMessage`](docs/sdks/channels/README.md#pinmessage)
- [`channelsSendSoundboardSound`](docs/sdks/channels/README.md#sendsoundboardsound)
- [`channelsThreadMembersAdd`](docs/sdks/discordchannelsthreadmembers/README.md#add)
- [`channelsThreadsArchivedPrivateList`](docs/sdks/private/README.md#list)
- [`channelsTriggerTyping`](docs/sdks/channels/README.md#triggertyping)
- [`channelsUnpinMessage`](docs/sdks/channels/README.md#unpinmessage)
- [`channelsUpdate`](docs/sdks/channels/README.md#update)
- [`channelsWebhooksCreate`](docs/sdks/discordwebhooks/README.md#create)
- [`channelWebhooksList`](docs/sdks/channelwebhooks/README.md#list)
- [`dmCreate`](docs/sdks/dm/README.md#create)
- [`entitlementsCreate`](docs/sdks/entitlements/README.md#create)
- [`gatewayBotGet`](docs/sdks/bot/README.md#get)
- [`gatewayGet`](docs/sdks/gateway/README.md#get)
- [`groupDmUsersAdd`](docs/sdks/groupdmusers/README.md#add)
- [`guildBansGet`](docs/sdks/guildbans/README.md#get)
- [`guildChannelsCreate`](docs/sdks/guildchannels/README.md#create)
- [`guildEmojisDelete`](docs/sdks/guildemojis/README.md#delete)
- [`guildEmojisGet`](docs/sdks/guildemojis/README.md#get)
- [`guildIntegrationsList`](docs/sdks/guildintegrations/README.md#list)
- [`guildInvitesList`](docs/sdks/guildinvites/README.md#list)
- [`guildMembersAdd`](docs/sdks/guildmembers/README.md#add)
- [`guildMembersGet`](docs/sdks/guildmembers/README.md#get)
- [`guildPrunePreview`](docs/sdks/guildprune/README.md#preview)
- [`guildsAddMemberRole`](docs/sdks/guilds/README.md#addmemberrole)
- [`guildsApplicationCommandPermissionsList`](docs/sdks/applicationcommandpermissions/README.md#list)
- [`guildsApplicationCommandsBulkSet`](docs/sdks/discordapplicationcommands/README.md#bulkset)
- [`guildsApplicationCommandsUpdate`](docs/sdks/discordapplicationcommands/README.md#update)
- [`guildsAutoModerationRulesList`](docs/sdks/discordautomoderationrules/README.md#list)
- [`guildsBanUser`](docs/sdks/guilds/README.md#banuser)
- [`guildsBulkBanUsers`](docs/sdks/guilds/README.md#bulkbanusers)
- [`guildsBulkUpdateRoles`](docs/sdks/guilds/README.md#bulkupdateroles)
- [`guildScheduledEventsGet`](docs/sdks/guildscheduledevents/README.md#get)
- [`guildScheduledEventsList`](docs/sdks/guildscheduledevents/README.md#list)
- [`guildScheduledEventUsersList`](docs/sdks/guildscheduledeventusers/README.md#list)
- [`guildsCreate`](docs/sdks/guilds/README.md#create)
- [`guildsCreateEmoji`](docs/sdks/guilds/README.md#createemoji)
- [`guildsCreateRole`](docs/sdks/guilds/README.md#createrole)
- [`guildsCreateScheduledEvent`](docs/sdks/guilds/README.md#createscheduledevent)
- [`guildsCreateSoundboardSound`](docs/sdks/guilds/README.md#createsoundboardsound)
- [`guildsCreateTemplate`](docs/sdks/guilds/README.md#createtemplate)
- [`guildsDelete`](docs/sdks/guilds/README.md#delete)
- [`guildsDeleteAutoModerationRule`](docs/sdks/guilds/README.md#deleteautomoderationrule)
- [`guildsDeleteMemberRole`](docs/sdks/guilds/README.md#deletememberrole)
- [`guildsDeleteRole`](docs/sdks/guilds/README.md#deleterole)
- [`guildsDeleteScheduledEvent`](docs/sdks/guilds/README.md#deletescheduledevent)
- [`guildsDeleteSoundboardSound`](docs/sdks/guilds/README.md#deletesoundboardsound)
- [`guildsDeleteSticker`](docs/sdks/guilds/README.md#deletesticker)
- [`guildsEmojisList`](docs/sdks/discordemojis/README.md#list)
- [`guildsGet`](docs/sdks/guilds/README.md#get)
- [`guildsGetAuditLogEntries`](docs/sdks/guilds/README.md#getauditlogentries)
- [`guildsGetAutoModerationRule`](docs/sdks/guilds/README.md#getautomoderationrule)
- [`guildsGetNewMemberWelcome`](docs/sdks/guilds/README.md#getnewmemberwelcome)
- [`guildsGetOnboarding`](docs/sdks/guilds/README.md#getonboarding)
- [`guildsGetPreview`](docs/sdks/guilds/README.md#getpreview)
- [`guildsGetRole`](docs/sdks/guilds/README.md#getrole)
- [`guildsGetRoles`](docs/sdks/guilds/README.md#getroles)
- [`guildsGetVanityUrl`](docs/sdks/guilds/README.md#getvanityurl)
- [`guildsGetWelcomeScreen`](docs/sdks/guilds/README.md#getwelcomescreen)
- [`guildsGetWidget`](docs/sdks/guilds/README.md#getwidget)
- [`guildsGetWidgetPng`](docs/sdks/guilds/README.md#getwidgetpng)
- [`guildsGetWidgetSettings`](docs/sdks/guilds/README.md#getwidgetsettings)
- [`guildsIntegrationsDelete`](docs/sdks/integrations/README.md#delete)
- [`guildsListBans`](docs/sdks/guilds/README.md#listbans)
- [`guildsListChannels`](docs/sdks/guilds/README.md#listchannels)
- [`guildsListMembers`](docs/sdks/guilds/README.md#listmembers)
- [`guildsListSoundboardSounds`](docs/sdks/guilds/README.md#listsoundboardsounds)
- [`guildsListStickers`](docs/sdks/guilds/README.md#liststickers)
- [`guildsListTemplates`](docs/sdks/guilds/README.md#listtemplates)
- [`guildsListWebhooks`](docs/sdks/guilds/README.md#listwebhooks)
- [`guildsMembersDelete`](docs/sdks/members/README.md#delete)
- [`guildSoundboardSoundsGet`](docs/sdks/guildsoundboardsounds/README.md#get)
- [`guildSoundboardSoundsUpdate`](docs/sdks/guildsoundboardsounds/README.md#update)
- [`guildsPrune`](docs/sdks/guilds/README.md#prune)
- [`guildsRegionsList`](docs/sdks/regions/README.md#list)
- [`guildsRolesUpdate`](docs/sdks/roles/README.md#update)
- [`guildsScheduledEventsUpdate`](docs/sdks/scheduledevents/README.md#update)
- [`guildsSearchMembers`](docs/sdks/guilds/README.md#searchmembers)
- [`guildsSetMfaLevel`](docs/sdks/guilds/README.md#setmfalevel)
- [`guildsTemplatesCreate`](docs/sdks/templates/README.md#create)
- [`guildsTemplatesGet`](docs/sdks/templates/README.md#get)
- [`guildsTemplatesUpdate`](docs/sdks/templates/README.md#update)
- [`guildStickersCreate`](docs/sdks/guildstickers/README.md#create)
- [`guildStickersGet`](docs/sdks/guildstickers/README.md#get)
- [`guildStickersUpdate`](docs/sdks/guildstickers/README.md#update)
- [`guildsUnbanUser`](docs/sdks/guilds/README.md#unbanuser)
- [`guildsUpdate`](docs/sdks/guilds/README.md#update)
- [`guildsUpdateAutoModerationRule`](docs/sdks/guilds/README.md#updateautomoderationrule)
- [`guildsUpdateChannels`](docs/sdks/guilds/README.md#updatechannels)
- [`guildsUpdateEmoji`](docs/sdks/guilds/README.md#updateemoji)
- [`guildsUpdateMember`](docs/sdks/guilds/README.md#updatemember)
- [`guildsUpdateMyMember`](docs/sdks/guilds/README.md#updatemymember)
- [`guildsUpdateOnboarding`](docs/sdks/guilds/README.md#updateonboarding)
- [`guildsUpdateSelfVoiceState`](docs/sdks/guilds/README.md#updateselfvoicestate)
- [`guildsUpdateWelcomeScreen`](docs/sdks/guilds/README.md#updatewelcomescreen)
- [`guildsUpdateWidgetSettings`](docs/sdks/guilds/README.md#updatewidgetsettings)
- [`guildTemplatesDelete`](docs/sdks/guildtemplates/README.md#delete)
- [`guildTemplatesSync`](docs/sdks/guildtemplates/README.md#sync)
- [`guildThreadsGetActive`](docs/sdks/guildthreads/README.md#getactive)
- [`invitesResolve`](docs/sdks/invites/README.md#resolve)
- [`invitesRevoke`](docs/sdks/invites/README.md#revoke)
- [`messageThreadsCreate`](docs/sdks/messagethreads/README.md#create)
- [`myUserUpdate`](docs/sdks/myuser/README.md#update)
- [`oauth2GetAuthorization`](docs/sdks/oauth2/README.md#getauthorization)
- [`oauth2GetKeys`](docs/sdks/oauth2/README.md#getkeys)
- [`oauth2GetMyApplication`](docs/sdks/oauth2/README.md#getmyapplication)
- [`soundboardsGetDefaultSounds`](docs/sdks/soundboards/README.md#getdefaultsounds)
- [`stageInstancesCreate`](docs/sdks/stageinstances/README.md#create)
- [`stageInstancesDelete`](docs/sdks/stageinstances/README.md#delete)
- [`stageInstancesGet`](docs/sdks/stageinstances/README.md#get)
- [`stageInstancesUpdate`](docs/sdks/stageinstances/README.md#update)
- [`stickerPacksGet`](docs/sdks/stickerpacks/README.md#get)
- [`stickerPacksList`](docs/sdks/stickerpacks/README.md#list)
- [`stickersGet`](docs/sdks/stickers/README.md#get)
- [`threadMembersDelete`](docs/sdks/threadmembers/README.md#delete)
- [`threadMembersGet`](docs/sdks/threadmembers/README.md#get)
- [`usersGet`](docs/sdks/users/README.md#get)
- [`usersGetMe`](docs/sdks/users/README.md#getme)
- [`usersGetMyGuildMember`](docs/sdks/users/README.md#getmyguildmember)
- [`usersGuildsLeave`](docs/sdks/discordguilds/README.md#leave)
- [`usersListConnections`](docs/sdks/users/README.md#listconnections)
- [`usersListGuilds`](docs/sdks/users/README.md#listguilds)
- [`voiceListRegions`](docs/sdks/voice/README.md#listregions)
- [`voiceStatesGetForUser`](docs/sdks/voicestates/README.md#getforuser)
- [`voiceStatesGetSelf`](docs/sdks/voicestates/README.md#getself)
- [`voiceStatesUpdate`](docs/sdks/voicestates/README.md#update)
- [`webhookMessagesDeleteOriginal`](docs/sdks/webhookmessages/README.md#deleteoriginal)
- [`webhookMessagesUpdateForm`](docs/sdks/webhookmessages/README.md#updateform)
- [`webhookMessagesUpdateJson`](docs/sdks/webhookmessages/README.md#updatejson)
- [`webhookMessagesUpdateMultipart`](docs/sdks/webhookmessages/README.md#updatemultipart)
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete)
- [`webhooksDeleteByToken`](docs/sdks/webhooks/README.md#deletebytoken)
- [`webhooksExecuteSlackWebhook`](docs/sdks/webhooks/README.md#executeslackwebhook)
- [`webhooksGet`](docs/sdks/webhooks/README.md#get)
- [`webhooksGetByToken`](docs/sdks/webhooks/README.md#getbytoken)
- [`webhooksGetMessage`](docs/sdks/webhooks/README.md#getmessage)
- [`webhooksGetOriginalMessage`](docs/sdks/webhooks/README.md#getoriginalmessage)
- [`webhooksGithubExecute`](docs/sdks/github/README.md#execute)
- [`webhooksMessagesDelete`](docs/sdks/discordmessages/README.md#delete)
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update)
- [`webhooksUpdateByToken`](docs/sdks/webhooks/README.md#updatebytoken)
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

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.oauth2.getMyApplication({
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
  const result = await discord.oauth2.getMyApplication();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `getMyApplication` method may throw the following errors:

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 4XX                  | application/json     |
| errors.SDKError      | 5XX                  | \*/\*                |

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
    result = await discord.oauth2.getMyApplication();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
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
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://discord.com/api/v10` | None |

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  serverIdx: 0,
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.oauth2.getMyApplication();

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  serverURL: "https://discord.com/api/v10",
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.oauth2.getMyApplication();

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `botToken`           | apiKey               | API key              | `DISCORD_BOT_TOKEN`  |

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
  const result = await discord.oauth2.getKeys();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=discord-sdk&utm_campaign=typescript)
