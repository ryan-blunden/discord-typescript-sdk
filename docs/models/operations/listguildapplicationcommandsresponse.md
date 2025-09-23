# ListGuildApplicationCommandsResponse

## Example Usage

```typescript
import { ListGuildApplicationCommandsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildApplicationCommandsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
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