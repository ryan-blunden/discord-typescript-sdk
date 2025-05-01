# MediaGalleryComponentForMessageRequest

## Example Usage

```typescript
import { MediaGalleryComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryComponentForMessageRequest = {
  items: [
    {
      media: {
        url: "https://hungry-sonar.info/",
      },
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `items`                                                                                    | [components.MediaGalleryItemRequest](../../models/components/mediagalleryitemrequest.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |