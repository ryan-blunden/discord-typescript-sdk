# GetAutoModerationRuleResponse

## Example Usage

```typescript
import { GetAutoModerationRuleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetAutoModerationRuleResponse = {
  headers: {},
  result: {
    id: "<value>",
    guildId: "<value>",
    creatorId: "<value>",
    name: "<value>",
    eventType: 2,
    actions: [
      {
        type: 2,
        metadata: {},
      },
    ],
    triggerType: 4,
    enabled: true,
    exemptRoles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    exemptChannels: [
      "<value 1>",
      "<value 2>",
    ],
    triggerMetadata: {
      allowList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      presets: [
        1,
      ],
    },
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headers`                                      | Record<string, *string*[]>                     | :heavy_check_mark:                             | N/A                                            |
| `result`                                       | *operations.GetAutoModerationRuleResponseBody* | :heavy_check_mark:                             | N/A                                            |