# MLSpamUpsertRequest

## Example Usage

```typescript
import { MLSpamUpsertRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MLSpamUpsertRequest = {
  name: "<value>",
  eventType: 1,
  triggerType: 5,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `eventType`                                                                                            | [components.AutomodEventType](../../models/components/automodeventtype.md)                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `actions`                                                                                              | *components.MLSpamUpsertRequestActions*[]                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `exemptRoles`                                                                                          | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `exemptChannels`                                                                                       | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `triggerType`                                                                                          | [components.MLSpamUpsertRequestTriggerType](../../models/components/mlspamupsertrequesttriggertype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `triggerMetadata`                                                                                      | [components.MLSpamTriggerMetadata](../../models/components/mlspamtriggermetadata.md)                   | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |