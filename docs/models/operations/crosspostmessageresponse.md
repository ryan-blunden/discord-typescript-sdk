# CrosspostMessageResponse

## Example Usage

```typescript
import { CrosspostMessageResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CrosspostMessageResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    content: "<value>",
    mentions: [],
    mentionRoles: [],
    attachments: [],
    embeds: [],
    timestamp: new Date("2025-04-04T17:06:18.484Z"),
    flags: 120989,
    components: [],
    id: "<value>",
    channelId: "<value>",
    author: {
      id: "<value>",
      username: "Arno21",
      discriminator: "<value>",
      publicFlags: 758206,
      flags: 309411,
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