# BulkSetApplicationCommandsResponse

## Example Usage

```typescript
import { BulkSetApplicationCommandsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkSetApplicationCommandsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "until genuine quietly atomize knit",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ApplicationCommandResponse](../../models/components/applicationcommandresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |