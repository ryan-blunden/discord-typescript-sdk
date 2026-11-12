# ApplicationCommandAttachmentOption

## Example Usage

```typescript
import { ApplicationCommandAttachmentOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandAttachmentOption = {
  type: 8,
  name: "<value>",
  description: "over hidden aha",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.ApplicationCommandAttachmentOptionType](../../models/components/applicationcommandattachmentoptiontype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nameLocalizations`                                                                                                    | Record<string, *string*>                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `descriptionLocalizations`                                                                                             | Record<string, *string*>                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `required`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `fileTypes`                                                                                                            | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |