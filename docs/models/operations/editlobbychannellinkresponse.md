# EditLobbyChannelLinkResponse

## Example Usage

```typescript
import { EditLobbyChannelLinkResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: EditLobbyChannelLinkResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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