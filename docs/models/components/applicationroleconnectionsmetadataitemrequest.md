# ApplicationRoleConnectionsMetadataItemRequest

## Example Usage

```typescript
import { ApplicationRoleConnectionsMetadataItemRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationRoleConnectionsMetadataItemRequest = {
  key: "<key>",
  name: "<value>",
  description: "pry actually yowza gee pish in sense opposite",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *number*                   | :heavy_check_mark:         | N/A                        |
| `key`                      | *string*                   | :heavy_check_mark:         | N/A                        |
| `name`                     | *string*                   | :heavy_check_mark:         | N/A                        |
| `nameLocalizations`        | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |
| `description`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `descriptionLocalizations` | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |