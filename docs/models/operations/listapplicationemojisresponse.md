# ListApplicationEmojisResponse

## Example Usage

```typescript
import { ListApplicationEmojisResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListApplicationEmojisResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    items: [
      {
        id: "<value>",
        name: "<value>",
        roles: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        requireColons: false,
        managed: false,
        animated: false,
        available: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.ListApplicationEmojisResponse](../../models/components/listapplicationemojisresponse.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |