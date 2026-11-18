# UserPrimaryGuildResponse

## Example Usage

```typescript
import { UserPrimaryGuildResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserPrimaryGuildResponse = {
  identityGuildId: "<value>",
  identityEnabled: true,
  tag: "<value>",
  badge: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `identityGuildId`                                             | *string*                                                      | :heavy_check_mark:                                            | the id of the user's primary guild                            |
| `identityEnabled`                                             | *boolean*                                                     | :heavy_check_mark:                                            | whether the user is displaying the primary guild's server tag |
| `tag`                                                         | *string*                                                      | :heavy_check_mark:                                            | the text of the user's server tag, limited to 4 characters    |
| `badge`                                                       | *string*                                                      | :heavy_check_mark:                                            | the server tag badge hash                                     |