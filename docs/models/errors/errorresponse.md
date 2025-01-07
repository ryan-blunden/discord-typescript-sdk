# ErrorResponse

Errors object returned by the Discord API

## Example Usage

```typescript
import { ErrorResponse } from "@ryan.blunden/discord-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `code`                                                | *number*                                              | :heavy_check_mark:                                    | Discord internal error code. See error code reference |
| `message`                                             | *string*                                              | :heavy_check_mark:                                    | Human-readable error message                          |
| `errors`                                              | *components.ErrorDetails*                             | :heavy_minus_sign:                                    | N/A                                                   |