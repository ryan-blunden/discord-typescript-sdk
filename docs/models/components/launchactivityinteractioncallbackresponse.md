# LaunchActivityInteractionCallbackResponse

## Example Usage

```typescript
import { LaunchActivityInteractionCallbackResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: LaunchActivityInteractionCallbackResponse = {
  type: 13,
  activityInstance: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [components.LaunchActivityInteractionCallbackResponseType](../../models/components/launchactivityinteractioncallbackresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `activityInstance`                                                                                                                   | [components.ActivityInstanceCallbackResponse](../../models/components/activityinstancecallbackresponse.md)                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |