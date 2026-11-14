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
    "key1": [],
  },
  result: [
    {
      id: "<value>",
      type: 3,
      content: "<value>",
      lobbyId: "<value>",
      channelId: "<value>",
      author: {
        id: "<value>",
        username: "Darryl.Olson",
        avatar: "https://picsum.photos/seed/gvSHPC/2249/2747",
        discriminator: "<value>",
        publicFlags: 803196,
        flags: 561096,
        globalName: "<value>",
        primaryGuild: null,
      },
      flags: 832745,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.LobbyMessageResponse](../../models/components/lobbymessageresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |