# SectionComponentResponse

## Example Usage

```typescript
import { SectionComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SectionComponentResponse = {
  id: 89081,
  components: [
    {
      id: 844630,
      content: "<value>",
    },
  ],
  accessory: {
    id: 238874,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `components`                                                                                         | [components.TextDisplayComponentResponse](../../models/components/textdisplaycomponentresponse.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accessory`                                                                                          | *components.Accessory*                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |