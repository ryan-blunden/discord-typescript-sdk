# MediaGalleryComponentForMessageRequest

## Example Usage

```typescript
import { MediaGalleryComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryComponentForMessageRequest = {
  type: 8,
  items: [
    {
      media: {
        url: "https://optimal-tuba.info",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.MediaGalleryComponentForMessageRequestType](../../models/components/mediagallerycomponentformessagerequesttype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `items`                                                                                                                        | [components.MediaGalleryItemRequest](../../models/components/mediagalleryitemrequest.md)[]                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |