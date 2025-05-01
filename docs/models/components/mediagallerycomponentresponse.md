# MediaGalleryComponentResponse

## Example Usage

```typescript
import { MediaGalleryComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryComponentResponse = {
  id: 223081,
  items: [
    {
      media: {
        id: "<value>",
        url: "https://chilly-cruelty.name",
        proxyUrl: "https://eminent-utilization.org",
      },
      spoiler: false,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `items`                                                                                      | [components.MediaGalleryItemResponse](../../models/components/mediagalleryitemresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |