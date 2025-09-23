# MLSpamRuleResponse

## Example Usage

```typescript
import { MLSpamRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MLSpamRuleResponse = {
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
  ],
  exemptChannels: [
    "<value 1>",
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
| `eventType`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `actions`                                                                                            | *components.MLSpamRuleResponseActions*[]                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `triggerType`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `exemptRoles`                                                                                        | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `exemptChannels`                                                                                     | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `triggerMetadata`                                                                                    | [components.MLSpamTriggerMetadataResponse](../../models/components/mlspamtriggermetadataresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |