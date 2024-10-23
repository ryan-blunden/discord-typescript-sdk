# TeamResponse

## Example Usage

```typescript
import { TeamResponse } from "discord-sdk/models/components";

let value: TeamResponse = {
  id: "<value>",
  name: "<value>",
  ownerUserId: "<value>",
  members: [
    {
      user: {
        id: "<value>",
        username: "Cleveland.Schuster83",
        discriminator: "<value>",
        publicFlags: 976460,
        flags: 468651,
      },
      teamId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `icon`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `ownerUserId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `members`                                                                        | [components.TeamMemberResponse](../../models/components/teammemberresponse.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |