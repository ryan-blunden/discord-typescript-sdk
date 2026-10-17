# ListGuildEmojisResponse

## Example Usage

```typescript
import { ListGuildEmojisResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildEmojisResponse = {
  headers: {
    "key": [],
  },
  result: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.EmojiResponse](../../models/components/emojiresponse.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |