# StickerPackCollectionResponse

## Example Usage

```typescript
import { StickerPackCollectionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: StickerPackCollectionResponse = {
  stickerPacks: [
    {
      id: "<value>",
      skuId: "<value>",
      name: "<value>",
      stickers: [
        {
          id: "<value>",
          name: "<value>",
          tags: "<value>",
          packId: "<value>",
          sortValue: 670198,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stickerPacks`                                                                     | [components.StickerPackResponse](../../models/components/stickerpackresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |