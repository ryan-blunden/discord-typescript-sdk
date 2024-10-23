# SelectOption

## Example Usage

```typescript
import { SelectOption } from "@ryan.blunden/discord-sdk/models/components";

let value: SelectOption = {
  label: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `label`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `value`                                              | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `description`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `emoji`                                              | [components.Emoji](../../models/components/emoji.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `default`                                            | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |