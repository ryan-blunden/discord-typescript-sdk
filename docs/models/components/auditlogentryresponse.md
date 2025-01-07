# AuditLogEntryResponse

## Example Usage

```typescript
import { AuditLogEntryResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: AuditLogEntryResponse = {
  id: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `actionType`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `targetId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `changes`                                                                                            | [components.AuditLogObjectChangeResponse](../../models/components/auditlogobjectchangeresponse.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `options`                                                                                            | Record<string, *string*>                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reason`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |