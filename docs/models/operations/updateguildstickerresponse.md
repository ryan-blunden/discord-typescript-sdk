# UpdateGuildStickerResponse

## Example Usage

```typescript
import { UpdateGuildStickerResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildStickerResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    tags: "<value>",
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