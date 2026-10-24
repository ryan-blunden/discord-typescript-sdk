# GetThreadMemberResponse

## Example Usage

```typescript
import { GetThreadMemberResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetThreadMemberResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    userId: "<value>",
    joinTimestamp: new Date("2024-02-15T17:24:24.220Z"),
    flags: 770501,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.ThreadMemberResponse](../../models/components/threadmemberresponse.md) | :heavy_check_mark:                                                                 | N/A                                                                                |