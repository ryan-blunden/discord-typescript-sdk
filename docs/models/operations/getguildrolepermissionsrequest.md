# GetGuildRolePermissionsRequest

## Example Usage

```typescript
import { GetGuildRolePermissionsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildRolePermissionsRequest = {
  guildId: "0",
  roleId: "0",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `guildId`           | *string*            | :heavy_check_mark:  | The ID of the guild |
| `roleId`            | *string*            | :heavy_check_mark:  | The ID of the role  |