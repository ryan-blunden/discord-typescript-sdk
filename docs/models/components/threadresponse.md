# ThreadResponse

## Example Usage

```typescript
import { ThreadResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadResponse = {
  id: "<value>",
  type: 5,
  flags: 385033,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  threadMetadata: {
    archived: true,
    archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
    autoArchiveDuration: 4320,
    locked: true,
  },
  messageCount: 728828,
  memberCount: 947468,
  totalMessageSent: 112473,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.ThreadResponseType](../../models/components/threadresponsetype.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
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
| `videoQualityMode`                                                                            | [components.VideoQualityModes](../../models/components/videoqualitymodes.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `threadMetadata`                                                                              | [components.ThreadMetadataResponse](../../models/components/threadmetadataresponse.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `memberCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalMessageSent`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `appliedTags`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |