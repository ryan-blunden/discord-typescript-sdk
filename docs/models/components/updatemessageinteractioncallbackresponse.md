# UpdateMessageInteractionCallbackResponse

## Example Usage

```typescript
import { UpdateMessageInteractionCallbackResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UpdateMessageInteractionCallbackResponse = {
  type: 6,
  message: {
    type: 28,
    content: "<value>",
    mentions: [],
    mentionRoles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    attachments: [
      {
        id: "<value>",
        filename: "example.file",
        size: 875209,
        url: "https://fair-molasses.biz/",
        proxyUrl: "https://doting-technologist.com/",
      },
    ],
    embeds: [],
    timestamp: new Date("2025-12-15T04:20:00.946Z"),
    editedTimestamp: new Date("2024-08-26T20:52:10.024Z"),
    flags: 876006,
    components: [],
    id: "<value>",
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
    pinned: true,
    mentionEveryone: false,
    tts: false,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [components.UpdateMessageInteractionCallbackResponseType](../../models/components/updatemessageinteractioncallbackresponsetype.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `message`                                                                                                                          | [components.MessageResponse](../../models/components/messageresponse.md)                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |