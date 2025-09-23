# GetGuildPreviewResponse

## Example Usage

```typescript
import { GetGuildPreviewResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildPreviewResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    features: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    approximateMemberCount: 622445,
    approximatePresenceCount: 332214,
    emojis: [
      {
        id: "<value>",
        name: "<value>",
        roles: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        requireColons: true,
        managed: true,
        animated: false,
        available: false,
      },
    ],
    stickers: [],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildPreviewResponse](../../models/components/guildpreviewresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |