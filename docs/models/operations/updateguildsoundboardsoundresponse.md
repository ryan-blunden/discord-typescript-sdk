# UpdateGuildSoundboardSoundResponse

## Example Usage

```typescript
import { UpdateGuildSoundboardSoundResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildSoundboardSoundResponse = {
  headers: {
    "key": [],
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