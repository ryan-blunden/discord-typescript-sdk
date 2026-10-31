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
      defaultMemberPermissions: "<value>",
      type: 1,
      name: "<value>",
      description: "dependable meaningfully onto extremely",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ApplicationCommandResponse](../../models/components/applicationcommandresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |