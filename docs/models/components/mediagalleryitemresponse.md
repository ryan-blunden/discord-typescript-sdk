# MediaGalleryItemResponse

## Example Usage

```typescript
import { MediaGalleryItemResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryItemResponse = {
  media: {
    id: "<value>",
    url: "https://faint-maintainer.biz",
    proxyUrl: "https://dead-density.biz/",
  },
  description: "oof sizzling circa out rebel innovation granular worth",
  spoiler: true,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `media`                                                                              | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `spoiler`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |