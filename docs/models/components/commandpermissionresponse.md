# CommandPermissionResponse

## Example Usage

```typescript
import { CommandPermissionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: CommandPermissionResponse = {
  id: "<value>",
  type: 3,
  permission: false,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [components.ApplicationCommandPermissionType](../../models/components/applicationcommandpermissiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `permission`                                                                                               | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |