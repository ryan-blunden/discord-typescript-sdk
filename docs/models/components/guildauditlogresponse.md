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
      type: "discord",
      name: "<value>",
      account: {
        id: "<id>",
        name: null,
      },
    },
  ],
  webhooks: [
    {
      applicationId: "<value>",
      avatar: "https://loremflickr.com/1420/3831?lock=3431572960378690",
      channelId: "<value>",
      id: "<value>",
      name: "<value>",
      type: 2,
    },
  ],
  guildScheduledEvents: [],
  threads: [],
  applicationCommands: [
    {
      id: "<value>",
      applicationId: "<value>",
      version: "<value>",
      defaultMemberPermissions: "<value>",
      type: 3,
      name: "<value>",
      description: "which instead fatal",
    },
  ],
  autoModerationRules: [
    {
      id: "<value>",
      guildId: "<value>",
      creatorId: "<value>",
      name: "<value>",
      eventType: 2,
      actions: [
        {
          type: 1,
          metadata: {
            durationSeconds: 122685,
          },
        },
      ],
      triggerType: 6,
      enabled: true,
      exemptRoles: [
        "<value 1>",
        "<value 2>",
      ],
      exemptChannels: [
        "<value 1>",
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