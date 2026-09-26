# CreateGuildStickerResponse

## Example Usage

```typescript
import { CreateGuildStickerResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildStickerResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    tags: "<value>",
    type: 1,
    formatType: 1,
    description: null,
    available: true,
    guildId: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |