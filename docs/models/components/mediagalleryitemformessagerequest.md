# MediaGalleryItemForMessageRequest

## Example Usage

```typescript
import { MediaGalleryItemForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: MediaGalleryItemForMessageRequest = {
  media: {
    url: "https://optimal-tuba.info",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `spoiler`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `media`                                                                            | [components.UnfurledMediaRequest](../../models/components/unfurledmediarequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |