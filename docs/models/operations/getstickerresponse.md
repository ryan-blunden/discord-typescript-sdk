# GetStickerResponse

## Example Usage

```typescript
import { GetStickerResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetStickerResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    tags: "<value>",
    packId: "<value>",
    sortValue: 649871,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetStickerResponseBody* | :heavy_check_mark:                  | N/A                                 |