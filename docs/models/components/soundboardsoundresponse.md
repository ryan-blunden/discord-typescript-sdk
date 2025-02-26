# SoundboardSoundResponse

## Example Usage

```typescript
import { SoundboardSoundResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: SoundboardSoundResponse = {
  name: "<value>",
  soundId: "<value>",
  volume: 641.84,
  available: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `soundId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `volume`                                                           | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `emojiId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `emojiName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `guildId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `available`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |