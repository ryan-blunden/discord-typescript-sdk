# PinnedMessageResponse

## Example Usage

```typescript
import { PinnedMessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PinnedMessageResponse = {
  pinnedAt: new Date("2023-03-29T15:28:38.120Z"),
  message: {
    content: "<value>",
    mentions: [
      {
        id: "<value>",
        username: "Cheyanne_Nolan42",
        discriminator: "<value>",
        publicFlags: 580340,
        flags: 254094,
      },
    ],
    mentionRoles: [],
    attachments: [],
    embeds: [
      {
        type: "<value>",
      },
    ],
    timestamp: new Date("2023-05-06T10:04:45.437Z"),
    flags: 130162,
    components: [
      {
        id: 217946,
        file: {
          id: "<value>",
          url: "https://authentic-juggernaut.org",
          proxyUrl: "https://each-vista.net",
        },
        spoiler: false,
      },
    ],
    id: "<value>",
    channelId: "<value>",
    author: {
      id: "<value>",
      username: "Arno21",
      discriminator: "<value>",
      publicFlags: 758206,
      flags: 309411,
    },
    pinned: true,
    mentionEveryone: false,
    tts: true,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `pinnedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `message`                                                                                     | [components.MessageResponse](../../models/components/messageresponse.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |