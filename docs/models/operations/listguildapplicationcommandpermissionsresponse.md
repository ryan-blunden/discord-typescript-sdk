# ListGuildApplicationCommandPermissionsResponse

## Example Usage

```typescript
import { ListGuildApplicationCommandPermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildApplicationCommandPermissionsResponse = {
  headers: {},
  result: [
    {
      id: "<value>",
      applicationId: "<value>",
      guildId: "<value>",
      permissions: [
        {
          id: "<value>",
          type: 2,
          permission: true,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.CommandPermissionsResponse](../../models/components/commandpermissionsresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |