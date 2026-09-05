# GetGuildWidgetResponse

## Example Usage

```typescript
import { GetGuildWidgetResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWidgetResponse = {
  headers: {},
  result: {
    id: "<value>",
    name: "<value>",
    instantInvite: "<value>",
    channels: [],
    members: [],
    presenceCount: 374535,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [components.WidgetResponse](../../models/components/widgetresponse.md) | :heavy_check_mark:                                                     | N/A                                                                    |