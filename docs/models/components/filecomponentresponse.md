# FileComponentResponse

## Example Usage

```typescript
import { FileComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: FileComponentResponse = {
  type: 13,
  id: 173185,
  file: {
    id: "<value>",
    url: "https://untidy-chow.biz/",
    proxyUrl: "https://utilized-verve.com",
  },
  name: "<value>",
  size: 13814,
  spoiler: true,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.FileComponentResponseType](../../models/components/filecomponentresponsetype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `file`                                                                                       | [components.UnfurledMediaResponse](../../models/components/unfurledmediaresponse.md)         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `size`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `spoiler`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |