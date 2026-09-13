# GetSoundboardDefaultSoundsResponse

## Example Usage

```typescript
import { GetSoundboardDefaultSoundsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetSoundboardDefaultSoundsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      name: "<value>",
      soundId: "<value>",
      volume: 2132.24,
      emojiId: "<value>",
      emojiName: null,
      available: false,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.SoundboardSoundResponse](../../models/components/soundboardsoundresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |