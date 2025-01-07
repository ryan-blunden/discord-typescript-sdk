# ListGuildSoundboardSoundsResponse

## Example Usage

```typescript
import { ListGuildSoundboardSoundsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ListGuildSoundboardSoundsResponse = {
  items: [
    {
      name: "<value>",
      soundId: "<value>",
      volume: 4838.96,
      available: false,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [components.SoundboardSoundResponse](../../models/components/soundboardsoundresponse.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |