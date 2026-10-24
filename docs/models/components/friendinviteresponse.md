# FriendInviteResponse

## Example Usage

```typescript
import { FriendInviteResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: FriendInviteResponse = {
  type: 1,
  code: "<value>",
  expiresAt: new Date("2024-10-13T03:27:08.577Z"),
  channel: {
    id: "<value>",
    type: 4,
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.FriendInviteResponseType](../../models/components/friendinviteresponsetype.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inviter`                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxAge`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `friendsCount`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channel`                                                                                     | [components.InviteChannelResponse](../../models/components/invitechannelresponse.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isContact`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `uses`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxUses`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |