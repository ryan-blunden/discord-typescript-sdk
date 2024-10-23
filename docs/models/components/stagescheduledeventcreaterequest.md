# StageScheduledEventCreateRequest

## Example Usage

```typescript
import { StageScheduledEventCreateRequest } from "discord-sdk/models/components";

let value: StageScheduledEventCreateRequest = {
  name: "<value>",
  scheduledStartTime: new Date("2023-11-08T06:42:18.331Z"),
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