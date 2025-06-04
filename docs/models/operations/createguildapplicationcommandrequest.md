# CreateGuildApplicationCommandRequest

## Example Usage

```typescript
import { CreateGuildApplicationCommandRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: CreateGuildApplicationCommandRequest = {
  applicationId: "<value>",
  guildId: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `guildId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `applicationCommandCreateRequest`                                                                        | [components.ApplicationCommandCreateRequest](../../models/components/applicationcommandcreaterequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |