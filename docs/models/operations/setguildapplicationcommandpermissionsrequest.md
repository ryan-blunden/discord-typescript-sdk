# SetGuildApplicationCommandPermissionsRequest

## Example Usage

```typescript
import { SetGuildApplicationCommandPermissionsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: SetGuildApplicationCommandPermissionsRequest = {
  applicationId: "<value>",
  guildId: "<value>",
  commandId: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `applicationId`                                                                                                                            | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `guildId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `commandId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `requestBody`                                                                                                                              | [operations.SetGuildApplicationCommandPermissionsRequestBody](../../models/operations/setguildapplicationcommandpermissionsrequestbody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |