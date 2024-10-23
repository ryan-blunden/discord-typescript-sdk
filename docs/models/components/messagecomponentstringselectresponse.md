# MessageComponentStringSelectResponse

## Example Usage

```typescript
import { MessageComponentStringSelectResponse } from "discord-sdk/models/components";

let value: MessageComponentStringSelectResponse = {
  id: 326264,
  customId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `placeholder`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `minValues`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `maxValues`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `disabled`                                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `options`                                                                            | [components.SelectOptionResponse](../../models/components/selectoptionresponse.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |