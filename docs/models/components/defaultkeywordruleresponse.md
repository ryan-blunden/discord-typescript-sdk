# DefaultKeywordRuleResponse

## Example Usage

```typescript
import { DefaultKeywordRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: DefaultKeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {},
    },
  ],
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `guildId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `creatorId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `eventType`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `actions`                                                                                                                    | *components.Actions*[]                                                                                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `triggerType`                                                                                                                | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `enabled`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `exemptRoles`                                                                                                                | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `exemptChannels`                                                                                                             | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `triggerMetadata`                                                                                                            | [components.DefaultKeywordListTriggerMetadataResponse](../../models/components/defaultkeywordlisttriggermetadataresponse.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |