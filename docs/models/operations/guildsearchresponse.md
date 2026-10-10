# GuildSearchResponse

## Example Usage

```typescript
import { GuildSearchResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GuildSearchResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    message: "<value>",
    code: 372141,
    documentsIndexed: 915549,
    retryAfter: 41079,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.GuildSearchResponseResult* | :heavy_check_mark:                     | N/A                                    |