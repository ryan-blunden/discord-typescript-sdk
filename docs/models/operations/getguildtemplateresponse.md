# GetGuildTemplateResponse

## Example Usage

```typescript
import { GetGuildTemplateResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildTemplateResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    code: "<value>",
    name: "<value>",
    usageCount: 4286,
    creatorId: "<value>",
    createdAt: new Date("2025-08-06T09:58:24.968Z"),
    updatedAt: new Date("2025-06-08T01:30:18.644Z"),
    sourceGuildId: "<value>",
    serializedSourceGuild: {
      name: "<value>",
      systemChannelFlags: 157535,
      roles: [
        {
          id: 260014,
          name: "<value>",
          permissions: "<value>",
          color: 247266,
          hoist: true,
          mentionable: false,
        },
      ],
      channels: [],
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GuildTemplateResponse](../../models/components/guildtemplateresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |