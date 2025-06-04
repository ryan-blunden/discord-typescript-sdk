# FileComponentResponse

## Example Usage

```typescript
import { FileComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: FileComponentResponse = {
  id: 601142,
  file: {
    id: "<value>",
    url: "https://actual-testimonial.com/",
    proxyUrl: "https://poor-toothpick.org/",
  },
  spoiler: true,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `file`                                                                               | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `size`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `spoiler`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |