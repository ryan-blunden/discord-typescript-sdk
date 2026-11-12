# GetChannelMemberPermissionsRequest

## Example Usage

```typescript
import { GetChannelMemberPermissionsRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: GetChannelMemberPermissionsRequest = {
  channelId: "<value>",
  userId: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `channelId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID of the channel                                                                                             |
| `userId`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ID of the member                                                                                              |
| `implicit`                                                                                                        | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether to apply implicit-permission computations. Defaults to true; pass false for the raw explicit permissions. |