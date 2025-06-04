# UpdateGuildApplicationCommandRequest

## Example Usage

```typescript
import { UpdateGuildApplicationCommandRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildApplicationCommandRequest = {
  applicationId: "<value>",
  guildId: "<value>",
  commandId: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `guildId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `commandId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `applicationCommandPatchRequestPartial`                                                                              | [components.ApplicationCommandPatchRequestPartial](../../models/components/applicationcommandpatchrequestpartial.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |