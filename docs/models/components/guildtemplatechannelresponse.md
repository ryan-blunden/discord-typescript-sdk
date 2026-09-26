# GuildTemplateChannelResponse

## Example Usage

```typescript
import { GuildTemplateChannelResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildTemplateChannelResponse = {
  id: 418129,
  type: 10,
  name: "<value>",
  position: 529628,
  topic: "<value>",
  bitrate: 75147,
  userLimit: 121390,
  nsfw: true,
  rateLimitPerUser: 776075,
  parentId: "<value>",
  defaultAutoArchiveDuration: 1440,
  permissionOverwrites: [],
  availableTags: [],
  template: "<value>",
  defaultReactionEmoji: {
    emojiId: null,
    emojiName: "<value>",
  },
  defaultThreadRateLimitPerUser: 522653,
  defaultSortOrder: 0,
  defaultForumLayout: 2,
  defaultTagSetting: "match_some",
  themeColor: 642834,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.GuildTemplateChannelResponseType](../../models/components/guildtemplatechannelresponsetype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `position`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `topic`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `bitrate`                                                                                                        | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `userLimit`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nsfw`                                                                                                           | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rateLimitPerUser`                                                                                               | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `parentId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultAutoArchiveDuration`                                                                                     | [components.ThreadAutoArchiveDuration](../../models/components/threadautoarchiveduration.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `permissionOverwrites`                                                                                           | [components.ChannelPermissionOverwriteResponse](../../models/components/channelpermissionoverwriteresponse.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `availableTags`                                                                                                  | [components.GuildTemplateChannelTags](../../models/components/guildtemplatechanneltags.md)[]                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `template`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultReactionEmoji`                                                                                           | [components.DefaultReactionEmojiResponse](../../models/components/defaultreactionemojiresponse.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultThreadRateLimitPerUser`                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultSortOrder`                                                                                               | [components.ThreadSortOrder](../../models/components/threadsortorder.md)                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultForumLayout`                                                                                             | [components.ForumLayout](../../models/components/forumlayout.md)                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `defaultTagSetting`                                                                                              | [components.ThreadSearchTagSetting](../../models/components/threadsearchtagsetting.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `themeColor`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |