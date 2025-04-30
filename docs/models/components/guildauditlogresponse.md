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
      username: "Emmett_Pfannerstill14",
      discriminator: "<value>",
      publicFlags: 744114,
      flags: 803960,
    },
  ],
  integrations: [
    {
      id: "<value>",
      applicationId: "<value>",
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
      scheduledStartTime: new Date("2025-11-15T20:16:48.429Z"),
    },
  ],
  threads: [
    {
      id: "<value>",
      flags: 137784,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 380981,
      memberCount: 148440,
      totalMessageSent: 647518,
    },
  ],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "scheme pastel especially",
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
          metadata: {
            channelId: "<value>",
          },
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