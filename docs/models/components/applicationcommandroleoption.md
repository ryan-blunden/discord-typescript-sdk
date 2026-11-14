# ApplicationCommandRoleOption

## Example Usage

```typescript
import { ApplicationCommandRoleOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandRoleOption = {
  type: 6,
  name: "<value>",
  description: "merge version instead dislocate",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.ApplicationCommandRoleOptionType](../../models/components/applicationcommandroleoptiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `nameLocalizations`                                                                                        | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `descriptionLocalizations`                                                                                 | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `required`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |