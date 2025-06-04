# MediaGalleryItemResponse

## Example Usage

```typescript
import { MediaGalleryItemResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryItemResponse = {
  media: {
    id: "<value>",
    url: "https://yellow-repeat.org",
    proxyUrl: "https://major-gastropod.name",
  },
  spoiler: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `media`                                                                              | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `spoiler`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |