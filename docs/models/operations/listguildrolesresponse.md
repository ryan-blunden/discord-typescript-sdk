# ListGuildRolesResponse

## Example Usage

```typescript
import { ListGuildRolesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildRolesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: [
    {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 898270,
      color: 582096,
      colors: {
        primaryColor: 296888,
      },
      hoist: true,
      managed: false,
      mentionable: false,
      flags: 313757,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.GuildRoleResponse](../../models/components/guildroleresponse.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |