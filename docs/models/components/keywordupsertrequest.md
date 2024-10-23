# KeywordUpsertRequest

## Example Usage

```typescript
import { KeywordUpsertRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: KeywordUpsertRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `eventType`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `actions`                                                                              | *components.KeywordUpsertRequestActions*[]                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `enabled`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `exemptRoles`                                                                          | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `exemptChannels`                                                                       | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `triggerType`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `triggerMetadata`                                                                      | [components.KeywordTriggerMetadata](../../models/components/keywordtriggermetadata.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |