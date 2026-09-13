# ThumbnailComponentResponse

## Example Usage

```typescript
import { ThumbnailComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThumbnailComponentResponse = {
  type: 17,
  id: 136536,
  media: {
    id: "<value>",
    url: "https://faint-maintainer.biz",
    proxyUrl: "https://dead-density.biz/",
  },
  description: "really while for hungry mmm",
  spoiler: true,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.ThumbnailComponentResponseType](../../models/components/thumbnailcomponentresponsetype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `media`                                                                                                | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md)                   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `spoiler`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |