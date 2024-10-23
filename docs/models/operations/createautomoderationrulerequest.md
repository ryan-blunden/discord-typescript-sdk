# CreateAutoModerationRuleRequest

## Example Usage

```typescript
import { CreateAutoModerationRuleRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateAutoModerationRuleRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `guildId`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `requestBody`                                    | *operations.CreateAutoModerationRuleRequestBody* | :heavy_check_mark:                               | N/A                                              |