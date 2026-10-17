# GetOriginalWebhookMessageResponse

## Example Usage

```typescript
import { GetOriginalWebhookMessageResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetOriginalWebhookMessageResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    type: 16,
    content: "<value>",
    mentions: [],
    mentionRoles: [],
    attachments: [],
    embeds: [
      {
        type: "<value>",
      },
    ],
    timestamp: new Date("2024-05-12T14:30:59.663Z"),
    editedTimestamp: new Date("2025-09-20T10:05:40.148Z"),
    flags: 972226,
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
    pinned: false,
    mentionEveryone: false,
    tts: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.MessageResponse](../../models/components/messageresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |