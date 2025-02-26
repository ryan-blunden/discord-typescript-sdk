# GuildAuditLogResponse

## Example Usage

```typescript
import { GuildAuditLogResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildAuditLogResponse = {
  auditLogEntries: [
    {
      id: "<value>",
    },
  ],
  users: [
    {
      id: "<value>",
      username: "Kolby_Hamill",
      discriminator: "<value>",
      publicFlags: 509562,
      flags: 888034,
    },
  ],
  integrations: [
    {
      id: "<value>",
    },
  ],
  webhooks: [
    {
      id: "<value>",
      name: "<value>",
    },
  ],
  guildScheduledEvents: [
    {
      id: "<value>",
      guildId: "<value>",
      name: "<value>",
      scheduledStartTime: new Date("2023-07-12T21:54:14.870Z"),
      entityMetadata: {
        location: "<value>",
      },
    },
  ],
  threads: [
    {
      id: "<value>",
      flags: 200991,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 623148,
      memberCount: 108112,
      totalMessageSent: 28994,
    },
  ],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "deduce anenst obnoxiously right miscalculate",
    },
  ],
  autoModerationRules: [
    {
      id: "<value>",
      guildId: "<value>",
      creatorId: "<value>",
      name: "<value>",
      actions: [
        {
          metadata: {},
        },
      ],
      triggerMetadata: {
        keywordFilter: [
          "<value>",
        ],
        regexPatterns: [
          "<value>",
        ],
        allowList: [
          "<value>",
        ],
      },
    },
  ],
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