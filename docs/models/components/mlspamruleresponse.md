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
      metadata: {
        channelId: "<value>",
      },
    },
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
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `exemptRoles`                                                                                        | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `exemptChannels`                                                                                     | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `triggerMetadata`                                                                                    | [components.MLSpamTriggerMetadataResponse](../../models/components/mlspamtriggermetadataresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |