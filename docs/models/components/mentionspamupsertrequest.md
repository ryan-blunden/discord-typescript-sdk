# MentionSpamUpsertRequest

## Example Usage

```typescript
import { MentionSpamUpsertRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MentionSpamUpsertRequest = {
  name: "<value>",
  eventType: 1,
  triggerType: 3,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `eventType`                                                                                                      | [components.AutomodEventType](../../models/components/automodeventtype.md)                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `actions`                                                                                                        | *components.MentionSpamUpsertRequestActions*[]                                                                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `enabled`                                                                                                        | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `exemptRoles`                                                                                                    | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `exemptChannels`                                                                                                 | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `triggerType`                                                                                                    | [components.MentionSpamUpsertRequestTriggerType](../../models/components/mentionspamupsertrequesttriggertype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `triggerMetadata`                                                                                                | [components.MentionSpamTriggerMetadata](../../models/components/mentionspamtriggermetadata.md)                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |