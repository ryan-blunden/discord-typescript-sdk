# MentionSpamRuleResponse

## Example Usage

```typescript
import { MentionSpamRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MentionSpamRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 1,
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
    mentionTotalLimit: 205400,
    mentionRaidProtectionEnabled: true,
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
| `eventType`                                                                                                    | [components.AutomodEventType](../../models/components/automodeventtype.md)                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `actions`                                                                                                      | *components.MentionSpamRuleResponseActions*[]                                                                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerType`                                                                                                  | [components.MentionSpamRuleResponseTriggerType](../../models/components/mentionspamruleresponsetriggertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptRoles`                                                                                                  | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptChannels`                                                                                               | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerMetadata`                                                                                              | [components.MentionSpamTriggerMetadataResponse](../../models/components/mentionspamtriggermetadataresponse.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |