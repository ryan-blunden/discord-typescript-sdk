# CreateOrJoinLobbyRequestBody

## Example Usage

```typescript
import { CreateOrJoinLobbyRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateOrJoinLobbyRequestBody = {
  secret: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `idleTimeoutSeconds`     | *number*                 | :heavy_minus_sign:       | N/A                      |
| `lobbyMetadata`          | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `memberMetadata`         | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `secret`                 | *string*                 | :heavy_check_mark:       | N/A                      |