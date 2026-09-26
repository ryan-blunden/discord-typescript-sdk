# PollEmojiCreateRequest

## Example Usage

```typescript
import { PollEmojiCreateRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: PollEmojiCreateRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_minus_sign:                                    | The ID of the custom emoji                            |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | The name of the emoji, or the unicode emoji character |
| `animated`                                            | *boolean*                                             | :heavy_minus_sign:                                    | Whether the emoji is animated                         |