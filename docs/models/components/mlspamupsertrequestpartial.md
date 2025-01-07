# MLSpamUpsertRequestPartial

## Example Usage

```typescript
import { MLSpamUpsertRequestPartial } from "@ryan.blunden/discord-sdk/models/components";

let value: MLSpamUpsertRequestPartial = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `eventType`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `actions`                                                                            | *components.MLSpamUpsertRequestPartialActions*[]                                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `exemptRoles`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `exemptChannels`                                                                     | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `triggerType`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `triggerMetadata`                                                                    | [components.MLSpamTriggerMetadata](../../models/components/mlspamtriggermetadata.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |