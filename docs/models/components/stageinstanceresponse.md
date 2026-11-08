# StageInstanceResponse

## Example Usage

```typescript
import { StageInstanceResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StageInstanceResponse = {
  guildId: "<value>",
  channelId: "<value>",
  topic: "<value>",
  privacyLevel: 2,
  id: "<value>",
  discoverableDisabled: false,
  guildScheduledEventId: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `channelId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `topic`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `privacyLevel`                                                                                   | [components.StageInstancesPrivacyLevels](../../models/components/stageinstancesprivacylevels.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `discoverableDisabled`                                                                           | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `guildScheduledEventId`                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |