# MessageReactionResponse

## Example Usage

```typescript
import { MessageReactionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageReactionResponse = {
  emoji: {
    id: "<value>",
    name: "<value>",
  },
  count: 108844,
  countDetails: {
    burst: 295555,
    normal: 960143,
  },
  burstColors: [
    "<value 1>",
  ],
  meBurst: true,
  me: true,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `emoji`                                                                                                          | [components.MessageReactionEmojiResponse](../../models/components/messagereactionemojiresponse.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `count`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `countDetails`                                                                                                   | [components.MessageReactionCountDetailsResponse](../../models/components/messagereactioncountdetailsresponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `burstColors`                                                                                                    | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `meBurst`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `me`                                                                                                             | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |