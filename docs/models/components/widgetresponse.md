# WidgetResponse

## Example Usage

```typescript
import { WidgetResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: WidgetResponse = {
  id: "<value>",
  name: "<value>",
  channels: [
    {
      id: "<value>",
      name: "<value>",
      position: 377716,
    },
  ],
  members: [
    {
      id: "<id>",
      username: "Terrill92",
      status: "<value>",
      avatarUrl: "https://sudden-hepatitis.net/",
    },
  ],
  presenceCount: 486354,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `instantInvite`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `channels`                                                             | [components.WidgetChannel](../../models/components/widgetchannel.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `members`                                                              | [components.WidgetMember](../../models/components/widgetmember.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `presenceCount`                                                        | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |