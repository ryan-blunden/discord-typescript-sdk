# GetLobbyResponse

## Example Usage

```typescript
import { GetLobbyResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetLobbyResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    applicationId: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    members: [],
    flags: 521876,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.LobbyResponse](../../models/components/lobbyresponse.md) | :heavy_check_mark:                                                   | N/A                                                                  |