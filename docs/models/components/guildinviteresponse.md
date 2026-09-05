# GuildInviteResponse

## Example Usage

```typescript
import { GuildInviteResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildInviteResponse = {
  type: 0,
  code: "<value>",
  expiresAt: new Date("2024-03-18T21:13:39.995Z"),
  guild: {
    id: "<value>",
    name: "<value>",
    splash: "<value>",
    banner: null,
    description:
      "spattering agitated over victoriously stack ew in absent which brr",
    icon: "<value>",
    features: [
      "DEVELOPER_SUPPORT_SERVER",
    ],
    verificationLevel: 4,
    vanityUrlCode: null,
    nsfwLevel: 0,
    nsfw: null,
    premiumSubscriptionCount: 325878,
  },
  guildId: "<value>",
  channel: {
    id: "<value>",
    type: 4,
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.GuildInviteResponseType](../../models/components/guildinviteresponsetype.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inviter`                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxAge`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isContact`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `guild`                                                                                       | [components.InviteGuildResponse](../../models/components/inviteguildresponse.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `guildId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `channel`                                                                                     | [components.InviteChannelResponse](../../models/components/invitechannelresponse.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetType`                                                                                  | [components.InviteTargetTypes](../../models/components/invitetargettypes.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetUser`                                                                                  | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetApplication`                                                                           | [components.InviteApplicationResponse](../../models/components/inviteapplicationresponse.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `guildScheduledEvent`                                                                         | [components.ScheduledEventResponse](../../models/components/scheduledeventresponse.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetChannelId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetMessageId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `liveliness`                                                                                  | [components.GuildLivelinessResponse](../../models/components/guildlivelinessresponse.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `uses`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxUses`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `temporary`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `approximateMemberCount`                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `approximatePresenceCount`                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isNicknameChangeable`                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roles`                                                                                       | [components.InviteGuildRoleResponse](../../models/components/inviteguildroleresponse.md)[]    | :heavy_minus_sign:                                                                            | N/A                                                                                           |