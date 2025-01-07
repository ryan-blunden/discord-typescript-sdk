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
      position: 415121,
    },
  ],
  members: [
    {
      id: "<id>",
      username: "Vince.Hoppe",
      status: "<value>",
      avatarUrl: "https://extra-large-daughter.info/",
    },
  ],
  presenceCount: 47289,
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