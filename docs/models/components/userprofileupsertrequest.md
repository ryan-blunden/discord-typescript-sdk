# UserProfileUpsertRequest

## Example Usage

```typescript
import { UserProfileUpsertRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: UserProfileUpsertRequest = {
  name: "<value>",
  eventType: 1,
  triggerType: 6,
  triggerMetadata: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `eventType`                                                                                                      | [components.AutomodEventType](../../models/components/automodeventtype.md)                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `actions`                                                                                                        | *components.UserProfileUpsertRequestActions*[]                                                                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `enabled`                                                                                                        | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `exemptRoles`                                                                                                    | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `exemptChannels`                                                                                                 | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `triggerType`                                                                                                    | [components.UserProfileUpsertRequestTriggerType](../../models/components/userprofileupsertrequesttriggertype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `triggerMetadata`                                                                                                | [components.UserProfileMetadata](../../models/components/userprofilemetadata.md)                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |