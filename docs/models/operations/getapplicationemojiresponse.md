# GetApplicationEmojiResponse

## Example Usage

```typescript
import { GetApplicationEmojiResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetApplicationEmojiResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    roles: [
      "<value 1>",
    ],
    requireColons: false,
    managed: false,
    animated: false,
    available: true,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.EmojiResponse](../../models/components/emojiresponse.md) | :heavy_check_mark:                                                   | N/A                                                                  |