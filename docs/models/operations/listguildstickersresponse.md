# ListGuildStickersResponse

## Example Usage

```typescript
import { ListGuildStickersResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildStickersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: [
    {
      id: "<value>",
      name: "<value>",
      tags: "<value>",
      type: 2,
      formatType: 1,
      description: "even thyme enlist vainly if inwardly profane drat record",
      available: false,
      guildId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GuildStickerResponse](../../models/components/guildstickerresponse.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |