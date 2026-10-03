# CreateLinkedLobbyGuildInviteForUserResponse

## Example Usage

```typescript
import { CreateLinkedLobbyGuildInviteForUserResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLinkedLobbyGuildInviteForUserResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    code: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.LobbyGuildInviteResponse](../../models/components/lobbyguildinviteresponse.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |