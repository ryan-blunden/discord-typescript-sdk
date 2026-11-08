# GetChannelRolePermissionsRequest

## Example Usage

```typescript
import { GetChannelRolePermissionsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetChannelRolePermissionsRequest = {
  channelId: "<value>",
  roleId: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `channelId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID of the channel                                                                                             |
| `roleId`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID of the role                                                                                                |
| `implicit`                                                                                                        | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether to apply implicit-permission computations. Defaults to true. Pass false for the raw explicit permissions. |