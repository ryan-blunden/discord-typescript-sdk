# CreateStageInstanceResponse

## Example Usage

```typescript
import { CreateStageInstanceResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateStageInstanceResponse = {
  headers: {
    "key": [
      "<value 1>",
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