# WidgetResponse

## Example Usage

```typescript
import { WidgetResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: WidgetResponse = {
  id: "<value>",
  name: "<value>",
  instantInvite: "<value>",
  channels: [
    {
      id: "<value>",
      name: "<value>",
      position: 464967,
    },
  ],
  members: [],
  presenceCount: 330802,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `instantInvite`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `channels`                                                             | [components.WidgetChannel](../../models/components/widgetchannel.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `members`                                                              | [components.WidgetMember](../../models/components/widgetmember.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `presenceCount`                                                        | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |