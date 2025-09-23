# ThreadSearchResponse

## Example Usage

```typescript
import { ThreadSearchResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ThreadSearchResponse = {
  headers: {},
  result: {
    threads: [],
    members: [
      {
        id: "<value>",
        userId: "<value>",
        joinTimestamp: new Date("2023-02-27T22:10:29.877Z"),
        flags: 189669,
      },
    ],
    hasMore: false,
    totalResults: 736266,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.ThreadSearchResponse](../../models/components/threadsearchresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |