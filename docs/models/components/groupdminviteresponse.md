# GroupDMInviteResponse

## Example Usage

```typescript
import { GroupDMInviteResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GroupDMInviteResponse = {
  code: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inviter`                                                                                     | [components.UserResponse](../../models/components/userresponse.md)                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxAge`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `channel`                                                                                     | [components.InviteChannelResponse](../../models/components/invitechannelresponse.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `approximateMemberCount`                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |