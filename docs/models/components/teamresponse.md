# TeamResponse

## Example Usage

```typescript
import { TeamResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: TeamResponse = {
  id: "<value>",
  name: "<value>",
  ownerUserId: "<value>",
  members: [
    {
      user: {
        id: "<value>",
        username: "Avery46",
        discriminator: "<value>",
        publicFlags: 604846,
        flags: 739264,
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