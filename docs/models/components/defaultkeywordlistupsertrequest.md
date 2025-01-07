# DefaultKeywordListUpsertRequest

## Example Usage

```typescript
import { DefaultKeywordListUpsertRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: DefaultKeywordListUpsertRequest = {
  name: "<value>",
  triggerMetadata: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `eventType`                                                                                                  | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `actions`                                                                                                    | *components.DefaultKeywordListUpsertRequestActions*[]                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `enabled`                                                                                                    | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `exemptRoles`                                                                                                | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `exemptChannels`                                                                                             | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `triggerType`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `triggerMetadata`                                                                                            | [components.DefaultKeywordListTriggerMetadata](../../models/components/defaultkeywordlisttriggermetadata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |