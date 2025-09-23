# CreateStageInstanceResponse

## Example Usage

```typescript
import { CreateStageInstanceResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateStageInstanceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    guildId: "<value>",
    channelId: "<value>",
    topic: "<value>",
    id: "<value>",
    discoverableDisabled: false,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.StageInstanceResponse](../../models/components/stageinstanceresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |