# ApplicationCommandSubcommandOption

## Example Usage

```typescript
import { ApplicationCommandSubcommandOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandSubcommandOption = {
  type: 3,
  name: "<value>",
  description: "wonderfully spanish oof part absentmindedly",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.ApplicationCommandSubcommandOptionType](../../models/components/applicationcommandsubcommandoptiontype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nameLocalizations`                                                                                                    | Record<string, *string*>                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `descriptionLocalizations`                                                                                             | Record<string, *string*>                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `required`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `options`                                                                                                              | *components.ApplicationCommandSubcommandOptionOptions*[]                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |