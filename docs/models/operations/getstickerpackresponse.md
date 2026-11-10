# GetStickerPackResponse

## Example Usage

```typescript
import { GetStickerPackResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetStickerPackResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    skuId: "<value>",
    name: "<value>",
    description: "meh uh-huh across blah whose aw",
    stickers: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.StickerPackResponse](../../models/components/stickerpackresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |