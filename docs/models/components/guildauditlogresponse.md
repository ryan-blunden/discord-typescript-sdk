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
      username: "Scottie19",
      discriminator: "<value>",
      publicFlags: 153732,
      flags: 616690,
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
      scheduledStartTime: new Date("2024-10-08T05:48:00.559Z"),
      entityMetadata: {
        location: "<value>",
      },
    },
  ],
  threads: [
    {
      id: "<value>",
      flags: 129509,
      guildId: "<value>",
      name: "<value>",
      ownerId: "<value>",
      messageCount: 479372,
      memberCount: 608836,
      totalMessageSent: 770696,
    },
  ],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      name: "<value>",
      description: "why rarely splurge electrify fooey now punctually",
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
      triggerMetadata: {},
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