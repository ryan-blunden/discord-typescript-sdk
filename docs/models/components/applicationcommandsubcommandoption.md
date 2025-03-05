# ApplicationCommandSubcommandOption

## Example Usage

```typescript
import { ApplicationCommandSubcommandOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandSubcommandOption = {
  name: "<value>",
  description: "along wrathful allegation supplier well-lit",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `nameLocalizations`                                      | Record<string, *string*>                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `descriptionLocalizations`                               | Record<string, *string*>                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `required`                                               | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `options`                                                | *components.ApplicationCommandSubcommandOptionOptions*[] | :heavy_minus_sign:                                       | N/A                                                      |