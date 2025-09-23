# UpdateAutoModerationRuleResponse

## Example Usage

```typescript
import { UpdateAutoModerationRuleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateAutoModerationRuleResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
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
    actions: [],
    enabled: false,
    exemptRoles: [
      "<value 1>",
      "<value 2>",
    ],
    exemptChannels: [
      "<value 1>",
    ],
    triggerMetadata: {
      mentionTotalLimit: 795455,
      mentionRaidProtectionEnabled: false,
    },
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `headers`                                         | Record<string, *string*[]>                        | :heavy_check_mark:                                | N/A                                               |
| `result`                                          | *operations.UpdateAutoModerationRuleResponseBody* | :heavy_check_mark:                                | N/A                                               |