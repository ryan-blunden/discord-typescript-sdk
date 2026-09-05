# GetApplicationCommandResponse

## Example Usage

```typescript
import { GetApplicationCommandResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetApplicationCommandResponse = {
  headers: {},
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