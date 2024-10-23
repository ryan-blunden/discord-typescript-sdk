# CreateGuildEmojiRequest

## Example Usage

```typescript
import { CreateGuildEmojiRequest } from "discord-sdk/models/operations";

let value: CreateGuildEmojiRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    image: "https://loremflickr.com/1443/1116?lock=342313995823440",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.CreateGuildEmojiRequestBody](../../models/operations/createguildemojirequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |