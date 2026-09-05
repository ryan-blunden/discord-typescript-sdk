# GroupDMInviteResponse

## Example Usage

```typescript
import { GroupDMInviteResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GroupDMInviteResponse = {
  type: 0,
  code: "<value>",
  expiresAt: new Date("2026-10-24T02:28:09.847Z"),
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
| `type`                                                                                        | [components.GroupDMInviteResponseType](../../models/components/groupdminviteresponsetype.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inviter`                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxAge`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `channel`                                                                                     | [components.InviteChannelResponse](../../models/components/invitechannelresponse.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `approximateMemberCount`                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |