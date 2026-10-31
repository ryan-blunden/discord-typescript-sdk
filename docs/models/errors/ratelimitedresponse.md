# RatelimitedResponse

Ratelimit error object returned by the Discord API

## Example Usage

```typescript
import { RatelimitedResponse } from "@ryan.blunden/discord-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *number*                                                                              | :heavy_check_mark:                                                                    | Discord internal error code. See error code reference                                 |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Human-readable error message                                                          |
| `retryAfter`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | The number of seconds to wait before retrying your request                            |
| `global`                                                                              | *boolean*                                                                             | :heavy_check_mark:                                                                    | Whether you are being ratelimited by the global ratelimit or a per-endpoint ratelimit |