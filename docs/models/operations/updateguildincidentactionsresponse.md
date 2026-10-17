# UpdateGuildIncidentActionsResponse

## Example Usage

```typescript
import { UpdateGuildIncidentActionsResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateGuildIncidentActionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    invitesDisabledUntil: null,
    dmsDisabledUntil: new Date("2026-08-19T11:57:30.313Z"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.GuildIncidentsDataResponse](../../models/components/guildincidentsdataresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |