# MediaGalleryComponentResponse

## Example Usage

```typescript
import { MediaGalleryComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryComponentResponse = {
  type: 10,
  id: 388742,
  items: [
    {
      media: {
        id: "<value>",
        url: "https://faint-maintainer.biz",
      },
      description: "incidentally orange homeschool wherever",
      spoiler: true,
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.MediaGalleryComponentResponseType](../../models/components/mediagallerycomponentresponsetype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `items`                                                                                                      | [components.MediaGalleryItemResponse](../../models/components/mediagalleryitemresponse.md)[]                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |