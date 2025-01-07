# MessageReactionResponse

## Example Usage

```typescript
import { MessageReactionResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageReactionResponse = {
  emoji: {},
  count: 179083,
  countDetails: {
    burst: 849010,
    normal: 509739,
  },
  burstColors: [
    "<value>",
  ],
  meBurst: false,
  me: false,
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