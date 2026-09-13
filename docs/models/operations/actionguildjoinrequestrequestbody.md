# ActionGuildJoinRequestRequestBody

## Example Usage

```typescript
import { ActionGuildJoinRequestRequestBody } from "@ryan.blunden/discord-sdk/models/operations";

let value: ActionGuildJoinRequestRequestBody = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `action`                                                | [operations.Action](../../models/operations/action.md)  | :heavy_minus_sign:                                      | Whether to approve or reject the join request           |
| `rejectionReason`                                       | *string*                                                | :heavy_minus_sign:                                      | Reason for rejection. Only used when action is REJECTED |