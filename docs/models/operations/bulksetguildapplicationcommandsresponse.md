# BulkSetGuildApplicationCommandsResponse

## Example Usage

```typescript
import { BulkSetGuildApplicationCommandsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkSetGuildApplicationCommandsResponse = {
  headers: {},
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