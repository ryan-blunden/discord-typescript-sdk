# SectionComponentForMessageRequest

## Example Usage

```typescript
import { SectionComponentForMessageRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: SectionComponentForMessageRequest = {
  components: [
    {
      content: "<value>",
    },
  ],
  accessory: {
    media: {
      url: "https://grown-jury.com",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `components`                                                                                                           | [components.TextDisplayComponentForMessageRequest](../../models/components/textdisplaycomponentformessagerequest.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `accessory`                                                                                                            | *components.SectionComponentForMessageRequestAccessory*                                                                | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |