# MessageSnapshotResponse

## Example Usage

```typescript
import { MessageSnapshotResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageSnapshotResponse = {
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
    mentionRoles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    attachments: [],
    embeds: [
      {
        type: "<value>",
      },
    ],
    timestamp: new Date("2024-06-14T07:50:22.104Z"),
    flags: 210180,
    components: [],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | [components.MinimalContentMessageResponse](../../models/components/minimalcontentmessageresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |