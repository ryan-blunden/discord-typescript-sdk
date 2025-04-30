# KeywordRuleResponse

## Example Usage

```typescript
import { KeywordRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: KeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {
        durationSeconds: 974890,
      },
    },
  ],
  triggerMetadata: {
    keywordFilter: [
      "<value>",
    ],
    regexPatterns: [
      "<value>",
    ],
    allowList: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `guildId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `creatorId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `eventType`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `actions`                                                                                              | *components.KeywordRuleResponseActions*[]                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `triggerType`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `exemptRoles`                                                                                          | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `exemptChannels`                                                                                       | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `triggerMetadata`                                                                                      | [components.KeywordTriggerMetadataResponse](../../models/components/keywordtriggermetadataresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |