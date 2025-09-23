# CreateGuildStickerResponse

## Example Usage

```typescript
import { CreateGuildStickerResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildStickerResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
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