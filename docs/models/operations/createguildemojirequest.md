# CreateGuildEmojiRequest

## Example Usage

```typescript
import { CreateGuildEmojiRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildEmojiRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    image: "https://loremflickr.com/446/544?lock=2197460622145316",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.CreateGuildEmojiRequestBody](../../models/operations/createguildemojirequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |