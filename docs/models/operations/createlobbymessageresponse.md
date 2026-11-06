# CreateLobbyMessageResponse

## Example Usage

```typescript
import { CreateLobbyMessageResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLobbyMessageResponse = {
  headers: {},
  result: {
    id: "<value>",
    type: 37,
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
    flags: 67569,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.LobbyMessageResponse](../../models/components/lobbymessageresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |