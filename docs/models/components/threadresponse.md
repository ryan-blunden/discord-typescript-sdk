# ThreadResponse

## Example Usage

```typescript
import { ThreadResponse } from "@ryan-blunden/discord/models/components";

let value: ThreadResponse = {
  id: "<value>",
  flags: 598087,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 250158,
  memberCount: 71448,
  totalMessageSent: 536181,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastMessageId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastPinTimestamp`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `guildId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rateLimitPerUser`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `bitrate`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userLimit`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rtcRegion`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `videoQualityMode`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `threadMetadata`                                                                              | [components.ThreadMetadataResponse](../../models/components/threadmetadataresponse.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `memberCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalMessageSent`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `appliedTags`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |