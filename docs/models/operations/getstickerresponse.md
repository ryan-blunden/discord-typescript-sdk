# GetStickerResponse

## Example Usage

```typescript
import { GetStickerResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetStickerResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    tags: "<value>",
    type: 2,
    formatType: 1,
    description: "even thyme enlist vainly if inwardly profane drat record",
    available: false,
    guildId: "<value>",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetStickerResponseBody* | :heavy_check_mark:                  | N/A                                 |