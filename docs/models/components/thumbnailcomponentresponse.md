# ThumbnailComponentResponse

## Example Usage

```typescript
import { ThumbnailComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThumbnailComponentResponse = {
  id: 539992,
  media: {
    id: "<value>",
    url: "https://potable-premium.name/",
    proxyUrl: "https://straight-eternity.info",
  },
  spoiler: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `media`                                                                              | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `spoiler`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |