# ListApplicationEmojisResponse

## Example Usage

```typescript
import { ListApplicationEmojisResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ListApplicationEmojisResponse = {
  items: [
    {
      id: "<value>",
      name: "<value>",
      roles: [
        "<value>",
      ],
      requireColons: false,
      managed: false,
      animated: false,
      available: false,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.EmojiResponse](../../models/components/emojiresponse.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |