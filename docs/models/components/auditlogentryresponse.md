# AuditLogEntryResponse

## Example Usage

```typescript
import { AuditLogEntryResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: AuditLogEntryResponse = {
  id: "<value>",
  actionType: 30,
  userId: "<value>",
  targetId: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `actionType`                                                                                         | [components.AuditLogActionTypes](../../models/components/auditlogactiontypes.md)                     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `targetId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `changes`                                                                                            | [components.AuditLogObjectChangeResponse](../../models/components/auditlogobjectchangeresponse.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `options`                                                                                            | Record<string, *string*>                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `reason`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |