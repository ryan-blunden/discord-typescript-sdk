# SectionComponentForMessageRequest

## Example Usage

```typescript
import { SectionComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: SectionComponentForMessageRequest = {
  type: 17,
  components: [],
  accessory: {
    type: 17,
    media: {
      url: "https://optimal-tuba.info",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.SectionComponentForMessageRequestType](../../models/components/sectioncomponentformessagerequesttype.md)   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `components`                                                                                                           | [components.TextDisplayComponentForMessageRequest](../../models/components/textdisplaycomponentformessagerequest.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `accessory`                                                                                                            | *components.SectionComponentForMessageRequestAccessory*                                                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |