# MediaGalleryItemRequest

## Example Usage

```typescript
import { MediaGalleryItemRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryItemRequest = {
  media: {
    url: "https://square-fishery.net/",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `spoiler`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `media`                                                                            | [components.UnfurledMediaRequest](../../models/components/unfurledmediarequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |