# BanUserFromGuildRequest

## Example Usage

```typescript
import { BanUserFromGuildRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BanUserFromGuildRequest = {
  guildId: "<value>",
  userId: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `guildId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestBody`                                                                                    | [operations.BanUserFromGuildRequestBody](../../models/operations/banuserfromguildrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |