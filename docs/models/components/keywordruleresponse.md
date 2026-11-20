# KeywordRuleResponse

## Example Usage

```typescript
import { KeywordRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: KeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 1,
  actions: [
    {
      type: 1,
      metadata: {
        durationSeconds: 122685,
      },
    },
  ],
  triggerType: 6,
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
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `guildId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `creatorId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `eventType`                                                                                            | [components.AutomodEventType](../../models/components/automodeventtype.md)                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `actions`                                                                                              | *components.KeywordRuleResponseActions*[]                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `triggerType`                                                                                          | [components.KeywordRuleResponseTriggerType](../../models/components/keywordruleresponsetriggertype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `exemptRoles`                                                                                          | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `exemptChannels`                                                                                       | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `triggerMetadata`                                                                                      | [components.KeywordTriggerMetadataResponse](../../models/components/keywordtriggermetadataresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |