# GuildJoinRequestResponse

## Example Usage

```typescript
import { GuildJoinRequestResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildJoinRequestResponse = {
  id: "<value>",
  createdAt: new Date("2025-10-10T18:10:24.690Z"),
  reviewedAt: new Date("2026-05-05T14:50:55.442Z"),
  applicationStatus: "SUBMITTED",
  rejectionReason: "<value>",
  guildId: "<value>",
  userId: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `reviewedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `applicationStatus`                                                                                          | [components.GuildJoinRequestApplicationStatus](../../models/components/guildjoinrequestapplicationstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `rejectionReason`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Reason request was rejected. Only set when application_status is REJECTED                                    |
| `guildId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `userId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `user`                                                                                                       | [components.UserResponse](../../models/components/userresponse.md)                                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `formResponses`                                                                                              | *components.FormResponses*[]                                                                                 | :heavy_minus_sign:                                                                                           | Applicant's responses on join request form                                                                   |
| `actionedByUser`                                                                                             | [components.UserResponse](../../models/components/userresponse.md)                                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |