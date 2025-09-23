# CreateAutoModerationRuleResponse

## Example Usage

```typescript
import { CreateAutoModerationRuleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateAutoModerationRuleResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    guildId: "<value>",
    creatorId: "<value>",
    name: "<value>",
    actions: [
      {
        metadata: {
          channelId: "<value>",
        },
      },
    ],
    enabled: false,
    exemptRoles: [
      "<value 1>",
    ],
    exemptChannels: [
      "<value 1>",
    ],
    triggerMetadata: {
      allowList: [
        "<value 1>",
        "<value 2>",
      ],
      presets: [
        127310,
        528147,
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