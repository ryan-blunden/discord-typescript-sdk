# DefaultKeywordRuleResponse

## Example Usage

```typescript
import { DefaultKeywordRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: DefaultKeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 2,
  actions: [],
  triggerType: 4,
  enabled: false,
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `guildId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `creatorId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `eventType`                                                                                                                  | [components.AutomodEventType](../../models/components/automodeventtype.md)                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `actions`                                                                                                                    | *components.Actions*[]                                                                                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `triggerType`                                                                                                                | [components.TriggerType](../../models/components/triggertype.md)                                                             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `enabled`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `exemptRoles`                                                                                                                | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `exemptChannels`                                                                                                             | *string*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `triggerMetadata`                                                                                                            | [components.DefaultKeywordListTriggerMetadataResponse](../../models/components/defaultkeywordlisttriggermetadataresponse.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |