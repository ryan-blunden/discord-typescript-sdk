# StickerPackResponse

## Example Usage

```typescript
import { StickerPackResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StickerPackResponse = {
  id: "<value>",
  skuId: "<value>",
  name: "<value>",
  stickers: [
    {
      id: "<value>",
      name: "<value>",
      tags: "<value>",
      packId: "<value>",
      sortValue: 91668,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `skuId`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `stickers`                                                                                 | [components.StandardStickerResponse](../../models/components/standardstickerresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `coverStickerId`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `bannerAssetId`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |