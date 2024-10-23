# TeamMemberResponse

## Example Usage

```typescript
import { TeamMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TeamMemberResponse = {
  user: {
    id: "<value>",
    username: "Whitney.Ritchie28",
    discriminator: "<value>",
    publicFlags: 296140,
    flags: 118727,
  },
  teamId: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `membershipState`                                                  | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |