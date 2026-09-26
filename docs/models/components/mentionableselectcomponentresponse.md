# MentionableSelectComponentResponse

## Example Usage

```typescript
import { MentionableSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MentionableSelectComponentResponse = {
  type: 13,
  id: 701760,
  customId: "<id>",
  minValues: 721153,
  maxValues: 771428,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.MentionableSelectComponentResponseType](../../models/components/mentionableselectcomponentresponsetype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customId`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `placeholder`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `minValues`                                                                                                            | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `maxValues`                                                                                                            | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `disabled`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `defaultValues`                                                                                                        | *components.DefaultValues*[]                                                                                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |