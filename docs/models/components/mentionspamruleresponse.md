# MentionSpamRuleResponse

## Example Usage

```typescript
import { MentionSpamRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MentionSpamRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [],
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  triggerMetadata: {
    mentionTotalLimit: 795455,
    mentionRaidProtectionEnabled: false,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `guildId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `creatorId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `eventType`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `actions`                                                                                                      | *components.MentionSpamRuleResponseActions*[]                                                                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerType`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptRoles`                                                                                                  | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptChannels`                                                                                               | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerMetadata`                                                                                              | [components.MentionSpamTriggerMetadataResponse](../../models/components/mentionspamtriggermetadataresponse.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |