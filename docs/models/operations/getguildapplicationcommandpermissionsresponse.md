# GetGuildApplicationCommandPermissionsResponse

## Example Usage

```typescript
import { GetGuildApplicationCommandPermissionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildApplicationCommandPermissionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<value>",
    applicationId: "<value>",
    guildId: "<value>",
    permissions: [
      {
        id: "<value>",
        permission: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.CommandPermissionsResponse](../../models/components/commandpermissionsresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |