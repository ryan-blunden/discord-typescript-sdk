# StageScheduledEventCreateRequest

## Example Usage

```typescript
import { StageScheduledEventCreateRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: StageScheduledEventCreateRequest = {
  name: "<value>",
  scheduledStartTime: new Date("2024-06-03T06:03:20.319Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `image`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scheduledStartTime`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `scheduledEndTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `privacyLevel`                                                                                   | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `entityType`                                                                                     | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `channelId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `entityMetadata`                                                                                 | [components.EntityMetadataStageInstance](../../models/components/entitymetadatastageinstance.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |