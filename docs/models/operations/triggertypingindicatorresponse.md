# TriggerTypingIndicatorResponse

## Example Usage

```typescript
import { TriggerTypingIndicatorResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: TriggerTypingIndicatorResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.TypingIndicatorResponse](../../models/components/typingindicatorresponse.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |