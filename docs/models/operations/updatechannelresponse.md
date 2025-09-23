# UpdateChannelResponse

## Example Usage

```typescript
import { UpdateChannelResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateChannelResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    id: "<value>",
    type: 5,
    flags: 812533,
    recipients: [
      {
        id: "<value>",
        username: "Delphia.Ferry",
        discriminator: "<value>",
        publicFlags: 948718,
        flags: 542086,
      },
    ],
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.UpdateChannelResponseBody* | :heavy_check_mark:                     | N/A                                    |