# LobbyMessageResponse

## Example Usage

```typescript
import { LobbyMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: LobbyMessageResponse = {
  id: "<value>",
  content: "<value>",
  lobbyId: "<value>",
  channelId: "<value>",
  author: {
    id: "<value>",
    username: "Sterling_Quitzon50",
    discriminator: "<value>",
    publicFlags: 770437,
    flags: 859724,
  },
  flags: 462906,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `content`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `lobbyId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `channelId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `author`                                                           | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `metadata`                                                         | Record<string, *string*>                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `flags`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `applicationId`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |