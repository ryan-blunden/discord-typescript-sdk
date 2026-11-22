# BulkSetGuildApplicationCommandsRequest

## Example Usage

```typescript
import { BulkSetGuildApplicationCommandsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: BulkSetGuildApplicationCommandsRequest = {
  applicationId: "0",
  guildId: "0",
  requestBody: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [components.ApplicationCommandUpdateRequest](../../models/components/applicationcommandupdaterequest.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |