# CreateInteractionResponseResponse

## Example Usage

```typescript
import { CreateInteractionResponseResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateInteractionResponseResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.InteractionCallbackResponse](../../models/components/interactioncallbackresponse.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |