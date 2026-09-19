# BulkUpdateGuildChannelsRequest

## Example Usage

```typescript
import { BulkUpdateGuildChannelsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkUpdateGuildChannelsRequest = {
  guildId: "<value>",
  requestBody: [
    {},
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `guildId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `requestBody`                                                      | [operations.RequestBody](../../models/operations/requestbody.md)[] | :heavy_check_mark:                                                 | N/A                                                                |