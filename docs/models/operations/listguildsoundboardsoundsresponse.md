# ListGuildSoundboardSoundsResponse

## Example Usage

```typescript
import { ListGuildSoundboardSoundsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildSoundboardSoundsResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    items: [
      {
        name: "<value>",
        soundId: "<value>",
        volume: 1951.55,
        emojiId: "<value>",
        emojiName: "<value>",
        available: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.ListGuildSoundboardSoundsResponse](../../models/components/listguildsoundboardsoundsresponse.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |