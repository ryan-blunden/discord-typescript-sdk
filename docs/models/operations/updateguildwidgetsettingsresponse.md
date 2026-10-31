# UpdateGuildWidgetSettingsResponse

## Example Usage

```typescript
import { UpdateGuildWidgetSettingsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildWidgetSettingsResponse = {
  headers: {},
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