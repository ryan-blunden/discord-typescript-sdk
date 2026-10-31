# CreateLinkedLobbyGuildInviteForSelfResponse

## Example Usage

```typescript
import { CreateLinkedLobbyGuildInviteForSelfResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLinkedLobbyGuildInviteForSelfResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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