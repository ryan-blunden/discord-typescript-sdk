# PrivateChannelResponse

## Example Usage

```typescript
import { PrivateChannelResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PrivateChannelResponse = {
  id: "<value>",
  type: 13,
  flags: 251055,
  recipients: [
    {
      id: "<value>",
      username: "Bennie93",
      discriminator: "<value>",
      publicFlags: 175853,
      flags: 411991,
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.PrivateChannelResponseType](../../models/components/privatechannelresponsetype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastMessageId`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `flags`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastPinTimestamp`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `recipients`                                                                                   | [components.UserResponse](../../models/components/userresponse.md)[]                           | :heavy_check_mark:                                                                             | N/A                                                                                            |