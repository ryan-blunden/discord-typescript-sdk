# ThumbnailComponentForMessageRequest

## Example Usage

```typescript
import { ThumbnailComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: ThumbnailComponentForMessageRequest = {
  type: 6,
  media: {
    url: "https://optimal-tuba.info",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.ThumbnailComponentForMessageRequestType](../../models/components/thumbnailcomponentformessagerequesttype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `spoiler`                                                                                                                | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `media`                                                                                                                  | [components.UnfurledMediaRequest](../../models/components/unfurledmediarequest.md)                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |