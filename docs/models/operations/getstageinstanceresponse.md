# GetStageInstanceResponse

## Example Usage

```typescript
import { GetStageInstanceResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetStageInstanceResponse = {
  headers: {},
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