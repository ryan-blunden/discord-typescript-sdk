# PrivateChannelResponse

## Example Usage

```typescript
import { PrivateChannelResponse } from "discord-sdk/models/components";

let value: PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 58029,
  recipients: [
    {
      id: "<value>",
      username: "Houston.Predovic17",
      discriminator: "<value>",
      publicFlags: 67249,
      flags: 679393,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastMessageId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastPinTimestamp`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `recipients`                                                                                  | [components.UserResponse](../../models/components/userresponse.md)[]                          | :heavy_check_mark:                                                                            | N/A                                                                                           |