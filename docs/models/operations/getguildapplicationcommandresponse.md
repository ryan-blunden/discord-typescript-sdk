# GetGuildApplicationCommandResponse

## Example Usage

```typescript
import { GetGuildApplicationCommandResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildApplicationCommandResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    id: "<value>",
    applicationId: "<value>",
    version: "<value>",
    defaultMemberPermissions: "<value>",
    type: 4,
    name: "<value>",
    description: "after knowledgeably accountability excitedly",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ApplicationCommandResponse](../../models/components/applicationcommandresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |