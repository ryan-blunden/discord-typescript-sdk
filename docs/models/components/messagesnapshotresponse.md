# MessageSnapshotResponse

## Example Usage

```typescript
import { MessageSnapshotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageSnapshotResponse = {
  message: {
    type: 55,
    content: "<value>",
    mentions: [
      {
        id: "<value>",
        username: "Rita50",
        avatar: "https://loremflickr.com/1013/467?lock=2998748940978968",
        discriminator: "<value>",
        publicFlags: 838918,
        flags: 1190,
        globalName: "<value>",
        primaryGuild: {
          identityGuildId: "<value>",
          identityEnabled: false,
          tag: "<value>",
          badge: "<value>",
        },
      },
    ],
    mentionRoles: [
      "<value 1>",
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
    timestamp: new Date("2024-08-18T08:34:37.600Z"),
    editedTimestamp: new Date("2025-08-23T15:03:58.310Z"),
    flags: 873234,
    components: [
      {
        type: 5,
        id: 897018,
        components: [],
        accessory: {
          type: 23,
          id: 744514,
          media: {
            id: "<value>",
            url: "https://faint-maintainer.biz",
            proxyUrl: "https://dead-density.biz/",
          },
          description:
            "aftermath recompense showy knife beside throughout draft service",
          spoiler: false,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | [components.MinimalContentMessageResponse](../../models/components/minimalcontentmessageresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |