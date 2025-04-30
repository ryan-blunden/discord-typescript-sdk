# ThreadMemberResponse

## Example Usage

```typescript
import { ThreadMemberResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ThreadMemberResponse = {
  id: "<value>",
  userId: "<value>",
  joinTimestamp: new Date("2023-08-28T13:19:29.266Z"),
  flags: 717856,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `joinTimestamp`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |