# ListMessageReactionsByEmojiResponse

## Example Usage

```typescript
import { ListMessageReactionsByEmojiResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListMessageReactionsByEmojiResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: [
    {
      id: "<value>",
      username: "Kira_Stoltenberg",
      discriminator: "<value>",
      publicFlags: 302857,
      flags: 106638,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `headers`                                                            | Record<string, *string*[]>                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `result`                                                             | [components.UserResponse](../../models/components/userresponse.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |