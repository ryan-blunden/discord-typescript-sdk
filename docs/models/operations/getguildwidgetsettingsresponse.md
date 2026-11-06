# GetGuildWidgetSettingsResponse

## Example Usage

```typescript
import { GetGuildWidgetSettingsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetGuildWidgetSettingsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    enabled: false,
    channelId: null,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.WidgetSettingsResponse](../../models/components/widgetsettingsresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |