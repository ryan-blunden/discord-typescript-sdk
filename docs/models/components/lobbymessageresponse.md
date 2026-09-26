# LobbyMessageResponse

## Example Usage

```typescript
import { LobbyMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: LobbyMessageResponse = {
  id: "<value>",
  type: 18,
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
  flags: 651111,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.MessageType](../../models/components/messagetype.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `content`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lobbyId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `channelId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `author`                                                                                       | [components.UserResponse](../../models/components/userresponse.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lobbyMember`                                                                                  | [components.MessageLobbyMemberResponse](../../models/components/messagelobbymemberresponse.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `moderationMetadata`                                                                           | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `flags`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `applicationId`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |