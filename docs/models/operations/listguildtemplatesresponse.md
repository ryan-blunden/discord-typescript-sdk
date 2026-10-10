# ListGuildTemplatesResponse

## Example Usage

```typescript
import { ListGuildTemplatesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildTemplatesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.GuildTemplateResponse](../../models/components/guildtemplateresponse.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |