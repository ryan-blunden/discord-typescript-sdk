# CreateOrJoinLobbyResponse

## Example Usage

```typescript
import { CreateOrJoinLobbyResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateOrJoinLobbyResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    applicationId: "<value>",
    members: [],
    flags: 817243,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.LobbyResponse](../../models/components/lobbyresponse.md) | :heavy_check_mark:                                                   | N/A                                                                  |