# GetAutoModerationRuleResponse

## Example Usage

```typescript
import { GetAutoModerationRuleResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetAutoModerationRuleResponse = {
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
    actions: [],
    enabled: true,
    exemptRoles: [],
    exemptChannels: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    triggerMetadata: {},
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `headers`                                      | Record<string, *string*[]>                     | :heavy_check_mark:                             | N/A                                            |
| `result`                                       | *operations.GetAutoModerationRuleResponseBody* | :heavy_check_mark:                             | N/A                                            |