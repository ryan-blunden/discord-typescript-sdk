# SectionComponentResponse

## Example Usage

```typescript
import { SectionComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SectionComponentResponse = {
  id: 664036,
  components: [
    {
      id: 822824,
      content: "<value>",
    },
  ],
  accessory: {
    id: 849900,
    media: {
      id: "<value>",
      url: "https://yellow-repeat.org",
      proxyUrl: "https://major-gastropod.name",
    },
    spoiler: true,
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