# StringSelect

## Example Usage

```typescript
import { StringSelect } from "discord-sdk/models/components";

let value: StringSelect = {
  customId: "<id>",
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `customId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `placeholder`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `minValues`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `maxValues`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `disabled`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `options`                                                            | [components.SelectOption](../../models/components/selectoption.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |