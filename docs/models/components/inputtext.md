# InputText

## Example Usage

```typescript
import { InputText } from "discord-sdk/models/components";

let value: InputText = {
  customId: "<id>",
  label: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *number*           | :heavy_check_mark: | N/A                |
| `customId`         | *string*           | :heavy_check_mark: | N/A                |
| `style`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_minus_sign: | N/A                |
| `placeholder`      | *string*           | :heavy_minus_sign: | N/A                |
| `required`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `minLength`        | *number*           | :heavy_minus_sign: | N/A                |
| `maxLength`        | *number*           | :heavy_minus_sign: | N/A                |