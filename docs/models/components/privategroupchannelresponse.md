# PrivateGroupChannelResponse

## Example Usage

```typescript
import { PrivateGroupChannelResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PrivateGroupChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 29105,
  recipients: [
    {
      id: "<value>",
      username: "Laurine40",
      discriminator: "<value>",
      publicFlags: 891412,
      flags: 475506,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [components.PrivateGroupChannelResponseType](../../models/components/privategroupchannelresponsetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lastMessageId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `flags`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `lastPinTimestamp`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `recipients`                                                                                             | [components.UserResponse](../../models/components/userresponse.md)[]                                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `icon`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `ownerId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `managed`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `applicationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |