# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ResolvedObjectsResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `users`                                                                                                    | Record<string, [components.UserResponse](../../models/components/userresponse.md)>                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `members`                                                                                                  | Record<string, [components.BasicGuildMemberResponse](../../models/components/basicguildmemberresponse.md)> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `channels`                                                                                                 | Record<string, *components.Channels*>                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `roles`                                                                                                    | Record<string, [components.GuildRoleResponse](../../models/components/guildroleresponse.md)>               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |