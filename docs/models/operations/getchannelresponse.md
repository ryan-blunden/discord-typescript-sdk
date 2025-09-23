# GetChannelResponse

## Example Usage

```typescript
import { GetChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetChannelResponse = {
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
    id: "<value>",
    type: 0,
    flags: 255134,
    recipients: [
      {
        id: "<value>",
        username: "Delphia.Ferry",
        discriminator: "<value>",
        publicFlags: 948718,
        flags: 542086,
      },
    ],
    ownerId: "<value>",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `headers`                           | Record<string, *string*[]>          | :heavy_check_mark:                  | N/A                                 |
| `result`                            | *operations.GetChannelResponseBody* | :heavy_check_mark:                  | N/A                                 |