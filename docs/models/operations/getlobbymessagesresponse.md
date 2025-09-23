# GetLobbyMessagesResponse

## Example Usage

```typescript
import { GetLobbyMessagesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetLobbyMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      id: "<value>",
      content: "<value>",
      lobbyId: "<value>",
      channelId: "<value>",
      author: {
        id: "<value>",
        username: "Arno21",
        discriminator: "<value>",
        publicFlags: 758206,
        flags: 309411,
      },
      flags: 13033,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.LobbyMessageResponse](../../models/components/lobbymessageresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |