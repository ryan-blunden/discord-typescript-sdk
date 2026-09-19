# ApplicationCommandBooleanOption

## Example Usage

```typescript
import { ApplicationCommandBooleanOption } from "@ryan.blunden/discord-sdk/models/components";

let value: ApplicationCommandBooleanOption = {
  type: 2,
  name: "<value>",
  description: "anxiously step when utterly heating joyous down",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.ApplicationCommandBooleanOptionType](../../models/components/applicationcommandbooleanoptiontype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nameLocalizations`                                                                                              | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `descriptionLocalizations`                                                                                       | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `required`                                                                                                       | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |