# PartialDiscordIntegrationResponse

## Example Usage

```typescript
import { PartialDiscordIntegrationResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PartialDiscordIntegrationResponse = {
  id: "<value>",
  account: {
    id: "<id>",
  },
  applicationId: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `account`                                                                | [components.AccountResponse](../../models/components/accountresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `applicationId`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |