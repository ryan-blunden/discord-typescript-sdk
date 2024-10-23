# FollowChannelRequest

## Example Usage

```typescript
import { FollowChannelRequest } from "discord-sdk/models/operations";

let value: FollowChannelRequest = {
  channelId: "<value>",
  requestBody: {
    webhookChannelId: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `channelId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.FollowChannelRequestBody](../../models/operations/followchannelrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |