# UpdateGuildChannelRequestPartial

## Example Usage

```typescript
import { UpdateGuildChannelRequestPartial } from "@ryan-blunden/discord/models/components";

let value: UpdateGuildChannelRequestPartial = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `position`                                                                                                     | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `topic`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `bitrate`                                                                                                      | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `userLimit`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `nsfw`                                                                                                         | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `rateLimitPerUser`                                                                                             | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `parentId`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `permissionOverwrites`                                                                                         | [components.ChannelPermissionOverwriteRequest](../../models/components/channelpermissionoverwriterequest.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `rtcRegion`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `videoQualityMode`                                                                                             | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultAutoArchiveDuration`                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultReactionEmoji`                                                                                         | [components.UpdateDefaultReactionEmojiRequest](../../models/components/updatedefaultreactionemojirequest.md)   | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultThreadRateLimitPerUser`                                                                                | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultSortOrder`                                                                                             | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `defaultForumLayout`                                                                                           | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `flags`                                                                                                        | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `availableTags`                                                                                                | [components.UpdateThreadTagRequest](../../models/components/updatethreadtagrequest.md)[]                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |