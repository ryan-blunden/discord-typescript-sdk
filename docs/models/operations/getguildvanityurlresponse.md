# GetGuildVanityUrlResponse

## Example Usage

```typescript
import { GetGuildVanityUrlResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildVanityUrlResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    uses: 681649,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.VanityURLResponse](../../models/components/vanityurlresponse.md) | :heavy_check_mark:                                                           | N/A                                                                          |