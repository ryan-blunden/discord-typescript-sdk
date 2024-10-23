# SelectOptionResponse

## Example Usage

```typescript
import { SelectOptionResponse } from "discord-sdk/models/components";

let value: SelectOptionResponse = {
  label: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `label`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `value`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `emoji`                                                                                              | [components.MessageComponentEmojiResponse](../../models/components/messagecomponentemojiresponse.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `default`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |