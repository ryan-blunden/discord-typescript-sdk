# SetGuildMfaLevelRequest

## Example Usage

```typescript
import { SetGuildMfaLevelRequest } from "@ryan.blunden/discord-sdk/models/operations";

let value: SetGuildMfaLevelRequest = {
  guildId: "<value>",
  guildMFARequest: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `guildId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `guildMFARequest`                                                        | [components.GuildMFARequest](../../models/components/guildmfarequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |