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
      position: 155002,
    },
  ],
  members: [
    {
      id: "<id>",
      username: "Scotty.Dickinson",
      status: "<value>",
      avatarUrl: "https://impolite-soybean.org",
    },
  ],
  presenceCount: 130960,
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