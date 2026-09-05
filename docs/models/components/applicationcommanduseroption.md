# ApplicationCommandUserOption

## Example Usage

```typescript
import { ApplicationCommandUserOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandUserOption = {
  type: 9,
  name: "<value>",
  description: "competent hungry reconstitute unsightly gosh whenever",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.ApplicationCommandUserOptionType](../../models/components/applicationcommanduseroptiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `nameLocalizations`                                                                                        | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `descriptionLocalizations`                                                                                 | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `required`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |