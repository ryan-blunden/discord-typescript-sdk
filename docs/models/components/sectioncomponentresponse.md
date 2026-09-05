# SectionComponentResponse

## Example Usage

```typescript
import { SectionComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SectionComponentResponse = {
  type: 14,
  id: 713017,
  components: [
    {
      type: 22,
      id: 849900,
      content: "<value>",
    },
  ],
  accessory: {
    type: 23,
    id: 744514,
    media: {
      id: "<value>",
      url: "https://faint-maintainer.biz",
      proxyUrl: "https://dead-density.biz/",
    },
    description:
      "aftermath recompense showy knife beside throughout draft service",
    spoiler: false,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.SectionComponentResponseType](../../models/components/sectioncomponentresponsetype.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `components`                                                                                         | [components.TextDisplayComponentResponse](../../models/components/textdisplaycomponentresponse.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accessory`                                                                                          | *components.Accessory*                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |