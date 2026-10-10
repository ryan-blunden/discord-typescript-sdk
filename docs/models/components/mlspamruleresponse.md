# MLSpamRuleResponse

## Example Usage

```typescript
import { MLSpamRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MLSpamRuleResponse = {
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
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  triggerMetadata: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `guildId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creatorId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `eventType`                                                                                          | [components.AutomodEventType](../../models/components/automodeventtype.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `actions`                                                                                            | *components.MLSpamRuleResponseActions*[]                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `triggerType`                                                                                        | [components.MLSpamRuleResponseTriggerType](../../models/components/mlspamruleresponsetriggertype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `exemptRoles`                                                                                        | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `exemptChannels`                                                                                     | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `triggerMetadata`                                                                                    | [components.MLSpamTriggerMetadataResponse](../../models/components/mlspamtriggermetadataresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |