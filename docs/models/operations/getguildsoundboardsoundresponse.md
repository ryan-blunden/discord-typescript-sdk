# GetGuildSoundboardSoundResponse

## Example Usage

```typescript
import { GetGuildSoundboardSoundResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildSoundboardSoundResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
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