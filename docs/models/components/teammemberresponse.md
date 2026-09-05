# TeamMemberResponse

## Example Usage

```typescript
import { TeamMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TeamMemberResponse = {
  user: {
    id: "<value>",
    username: "Dora.Toy69",
    avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
    discriminator: "<value>",
    publicFlags: 159404,
    flags: 192637,
    globalName: null,
    primaryGuild: {
      identityGuildId: "<value>",
      identityEnabled: false,
      tag: "<value>",
      badge: "<value>",
    },
  },
  teamId: "<value>",
  membershipState: 1,
  role: "developer",
  permissions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `user`                                                                             | [components.UserResponse](../../models/components/userresponse.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `membershipState`                                                                  | [components.TeamMembershipStates](../../models/components/teammembershipstates.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `role`                                                                             | [components.TeamMemberRoles](../../models/components/teammemberroles.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `permissions`                                                                      | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |