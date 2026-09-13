# UserProfileRuleResponse

## Example Usage

```typescript
import { UserProfileRuleResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserProfileRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 2,
  actions: [],
  triggerType: 3,
  enabled: false,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
  ],
  exemptChannels: [],
  triggerMetadata: {
    keywordFilter: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    regexPatterns: [
      "<value 1>",
      "<value 2>",
    ],
    allowList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
| `actions`                                                                                                      | *components.UserProfileRuleResponseActions*[]                                                                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerType`                                                                                                  | [components.UserProfileRuleResponseTriggerType](../../models/components/userprofileruleresponsetriggertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptRoles`                                                                                                  | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `exemptChannels`                                                                                               | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `triggerMetadata`                                                                                              | [components.UserProfileMetadataResponse](../../models/components/userprofilemetadataresponse.md)               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |