# TextInputComponentResponse

## Example Usage

```typescript
import { TextInputComponentResponse } from "@ryan.blunden/discord/models/components";

let value: TextInputComponentResponse = {
  id: 450113,
  customId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *number*           | :heavy_check_mark: | N/A                |
| `id`               | *number*           | :heavy_check_mark: | N/A                |
| `customId`         | *string*           | :heavy_check_mark: | N/A                |
| `style`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *string*           | :heavy_minus_sign: | N/A                |
| `value`            | *string*           | :heavy_minus_sign: | N/A                |
| `placeholder`      | *string*           | :heavy_minus_sign: | N/A                |
| `required`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `minLength`        | *number*           | :heavy_minus_sign: | N/A                |
| `maxLength`        | *number*           | :heavy_minus_sign: | N/A                |