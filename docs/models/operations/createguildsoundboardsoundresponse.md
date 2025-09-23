# CreateGuildSoundboardSoundResponse

## Example Usage

```typescript
import { CreateGuildSoundboardSoundResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildSoundboardSoundResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    name: "<value>",
    soundId: "<value>",
    volume: 2274.73,
    available: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.SoundboardSoundResponse](../../models/components/soundboardsoundresponse.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |