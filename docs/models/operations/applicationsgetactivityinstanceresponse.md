# ApplicationsGetActivityInstanceResponse

## Example Usage

```typescript
import { ApplicationsGetActivityInstanceResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ApplicationsGetActivityInstanceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    applicationId: "<value>",
    instanceId: "<id>",
    launchId: "<id>",
    location: {
      id: "<id>",
      channelId: "<value>",
    },
    users: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.EmbeddedActivityInstance](../../models/components/embeddedactivityinstance.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |