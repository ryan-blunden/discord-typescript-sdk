# GuildAuditLogResponse

## Example Usage

```typescript
import { GuildAuditLogResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildAuditLogResponse = {
  auditLogEntries: [],
  users: [],
  integrations: [
    {
      id: "<value>",
      account: {
        id: "<id>",
      },
    },
  ],
  webhooks: [],
  guildScheduledEvents: [],
  threads: [
    {
      id: "<value>",
      type: 12,
      flags: 208413,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      threadMetadata: {
        archived: true,
        locked: false,
      },
      messageCount: 861725,
      memberCount: 120176,
      totalMessageSent: 694491,
    },
  ],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "onto midst uh-huh knit",
    },
  ],
  autoModerationRules: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `auditLogEntries`                                                                                | [components.AuditLogEntryResponse](../../models/components/auditlogentryresponse.md)[]           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `users`                                                                                          | [components.UserResponse](../../models/components/userresponse.md)[]                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `integrations`                                                                                   | *components.Integrations*[]                                                                      | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `webhooks`                                                                                       | *components.Webhooks*[]                                                                          | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `guildScheduledEvents`                                                                           | *components.GuildScheduledEvents*[]                                                              | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `threads`                                                                                        | [components.ThreadResponse](../../models/components/threadresponse.md)[]                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `applicationCommands`                                                                            | [components.ApplicationCommandResponse](../../models/components/applicationcommandresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `autoModerationRules`                                                                            | *components.AutoModerationRules*[]                                                               | :heavy_check_mark:                                                                               | N/A                                                                                              |