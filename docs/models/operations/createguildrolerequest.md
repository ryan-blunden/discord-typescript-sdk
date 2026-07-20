# CreateGuildRoleRequest

## Example Usage

```typescript
import { CreateGuildRoleRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildRoleRequest = {
  guildId: "<value>",
  createRoleRequest: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `guildId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createRoleRequest`                                                          | [components.CreateRoleRequest](../../models/components/createrolerequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |