# ListPinsResponse

## Example Usage

```typescript
import { ListPinsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListPinsResponse = {
  headers: {},
  result: {
    items: [],
    hasMore: false,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.PinnedMessagesResponse](../../models/components/pinnedmessagesresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |