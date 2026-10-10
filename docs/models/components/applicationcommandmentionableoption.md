# ApplicationCommandMentionableOption

## Example Usage

```typescript
import { ApplicationCommandMentionableOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandMentionableOption = {
  type: 9,
  name: "<value>",
  description: "yuck ick unruly",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.ApplicationCommandMentionableOptionType](../../models/components/applicationcommandmentionableoptiontype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `nameLocalizations`                                                                                                      | Record<string, *string*>                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `descriptionLocalizations`                                                                                               | Record<string, *string*>                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `required`                                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |