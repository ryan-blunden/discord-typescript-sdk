# CreateLobbyMessageResponse

## Example Usage

```typescript
import { CreateLobbyMessageResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateLobbyMessageResponse = {
  headers: {},
  result: {
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
    flags: 883888,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.LobbyMessageResponse](../../models/components/lobbymessageresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |