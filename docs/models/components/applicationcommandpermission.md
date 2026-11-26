# ApplicationCommandPermission

## Example Usage

```typescript
import { ApplicationCommandPermission } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandPermission = {
  id: "<value>",
  type: 2,
  permission: false,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [components.ApplicationCommandPermissionType](../../models/components/applicationcommandpermissiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `permission`                                                                                               | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |