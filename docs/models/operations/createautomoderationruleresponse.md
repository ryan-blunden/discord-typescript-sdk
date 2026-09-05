# CreateAutoModerationRuleResponse

## Example Usage

```typescript
import { CreateAutoModerationRuleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateAutoModerationRuleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    guildId: "<value>",
    creatorId: "<value>",
    name: "<value>",
    eventType: 1,
    actions: [
      {
        type: 3,
        metadata: {
          channelId: "<value>",
        },
      },
    ],
    triggerType: 4,
    enabled: false,
    exemptRoles: [],
    exemptChannels: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    triggerMetadata: {
      keywordFilter: [],
      regexPatterns: [
        "<value 1>",
        "<value 2>",
      ],
      allowList: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `headers`                                         | Record<string, *string*[]>                        | :heavy_check_mark:                                | N/A                                               |
| `result`                                          | *operations.CreateAutoModerationRuleResponseBody* | :heavy_check_mark:                                | N/A                                               |