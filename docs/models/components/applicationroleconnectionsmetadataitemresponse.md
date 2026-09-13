# ApplicationRoleConnectionsMetadataItemResponse

## Example Usage

```typescript
import { ApplicationRoleConnectionsMetadataItemResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationRoleConnectionsMetadataItemResponse = {
  type: 4,
  key: "<key>",
  name: "<value>",
  description: "nor since modulo",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.MetadataItemTypes](../../models/components/metadataitemtypes.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `key`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `nameLocalizations`                                                          | Record<string, *string*>                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `descriptionLocalizations`                                                   | Record<string, *string*>                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |