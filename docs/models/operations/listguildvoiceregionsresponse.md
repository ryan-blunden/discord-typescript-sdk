# ListGuildVoiceRegionsResponse

## Example Usage

```typescript
import { ListGuildVoiceRegionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildVoiceRegionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      id: "<id>",
      name: "<value>",
      custom: true,
      deprecated: false,
      optimal: false,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.VoiceRegionResponse](../../models/components/voiceregionresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |