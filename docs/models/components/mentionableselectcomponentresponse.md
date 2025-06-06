# MentionableSelectComponentResponse

## Example Usage

```typescript
import { MentionableSelectComponentResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MentionableSelectComponentResponse = {
  id: 648452,
  customId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *number*                     | :heavy_check_mark:           | N/A                          |
| `id`                         | *number*                     | :heavy_check_mark:           | N/A                          |
| `customId`                   | *string*                     | :heavy_check_mark:           | N/A                          |
| `placeholder`                | *string*                     | :heavy_minus_sign:           | N/A                          |
| `minValues`                  | *number*                     | :heavy_minus_sign:           | N/A                          |
| `maxValues`                  | *number*                     | :heavy_minus_sign:           | N/A                          |
| `disabled`                   | *boolean*                    | :heavy_minus_sign:           | N/A                          |
| `defaultValues`              | *components.DefaultValues*[] | :heavy_minus_sign:           | N/A                          |