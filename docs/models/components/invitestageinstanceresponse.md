# InviteStageInstanceResponse

## Example Usage

```typescript
import { InviteStageInstanceResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: InviteStageInstanceResponse = {
  topic: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `topic`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `participantCount`                                                                 | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `speakerCount`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `members`                                                                          | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |