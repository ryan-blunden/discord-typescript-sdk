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
      username: "Art_Carter18",
      discriminator: "<value>",
      publicFlags: 817054,
      flags: 571849,
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
      scheduledStartTime: new Date("2024-08-26T11:17:42.321Z"),
    },
  ],
  threads: [
    {
      id: "<value>",
      type: 11,
      flags: 405335,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 346072,
      memberCount: 903378,
      totalMessageSent: 565245,
    },
  ],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "fashion swear frightfully tousle failing",
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
            durationSeconds: 897509,
          },
        },
      ],
      triggerMetadata: {
        mentionTotalLimit: 440355,
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