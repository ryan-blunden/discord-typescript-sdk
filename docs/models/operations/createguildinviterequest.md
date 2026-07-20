# CreateGuildInviteRequest

## Example Usage

```typescript
import { CreateGuildInviteRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildInviteRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `maxAge`                                                       | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `temporary`                                                    | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `maxUses`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `unique`                                                       | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `targetUserId`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `targetApplicationId`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `targetType`                                                   | [operations.TargetType](../../models/operations/targettype.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `roleIds`                                                      | *operations.RoleIds*                                           | :heavy_minus_sign:                                             | N/A                                                            |
| `targetUsersFile`                                              | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |