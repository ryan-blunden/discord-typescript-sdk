# UpdateStageInstanceResponse

## Example Usage

```typescript
import { UpdateStageInstanceResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateStageInstanceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    guildId: "<value>",
    channelId: "<value>",
    topic: "<value>",
    privacyLevel: 2,
    id: "<value>",
    discoverableDisabled: false,
    guildScheduledEventId: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.StageInstanceResponse](../../models/components/stageinstanceresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |