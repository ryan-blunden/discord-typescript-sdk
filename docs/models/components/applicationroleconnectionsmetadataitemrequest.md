# ApplicationRoleConnectionsMetadataItemRequest

## Example Usage

```typescript
import { ApplicationRoleConnectionsMetadataItemRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationRoleConnectionsMetadataItemRequest = {
  type: 6,
  key: "<key>",
  name: "<value>",
  description: "indeed very retool blah dime ditch homeschool provision give",
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