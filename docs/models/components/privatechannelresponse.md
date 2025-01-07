# PrivateChannelResponse

## Example Usage

```typescript
import { PrivateChannelResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: PrivateChannelResponse = {
  id: "<value>",
  flags: 164694,
  recipients: [
    {
      id: "<value>",
      username: "Lillie_Ferry",
      discriminator: "<value>",
      publicFlags: 589910,
      flags: 730122,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastMessageId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastPinTimestamp`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `recipients`                                                                                  | [components.UserResponse](../../models/components/userresponse.md)[]                          | :heavy_check_mark:                                                                            | N/A                                                                                           |