# ListStickerPacksResponse

## Example Usage

```typescript
import { ListStickerPacksResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListStickerPacksResponse = {
  headers: {},
  result: {
    stickerPacks: [],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.StickerPackCollectionResponse](../../models/components/stickerpackcollectionresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |