# UpdateApplicationCommandResponse

## Example Usage

```typescript
import { UpdateApplicationCommandResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateApplicationCommandResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    applicationId: "<value>",
    version: "<value>",
    name: "<value>",
    description:
      "official absolve reschedule entomb untrue defenseless armchair",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ApplicationCommandResponse](../../models/components/applicationcommandresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |