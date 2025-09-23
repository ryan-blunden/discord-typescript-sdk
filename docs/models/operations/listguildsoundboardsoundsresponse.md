# ListGuildSoundboardSoundsResponse

## Example Usage

```typescript
import { ListGuildSoundboardSoundsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildSoundboardSoundsResponse = {
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
  },
  result: {
    items: [
      {
        name: "<value>",
        soundId: "<value>",
        volume: 1951.55,
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