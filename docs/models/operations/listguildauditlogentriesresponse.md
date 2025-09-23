# ListGuildAuditLogEntriesResponse

## Example Usage

```typescript
import { ListGuildAuditLogEntriesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildAuditLogEntriesResponse = {
  headers: {},
  result: {
    auditLogEntries: [],
    users: [
      {
        id: "<value>",
        username: "Alison_Grady",
        discriminator: "<value>",
        publicFlags: 127851,
        flags: 221342,
      },
    ],
    integrations: [],
    webhooks: [],
    guildScheduledEvents: [
      {
        id: "<value>",
        guildId: "<value>",
        name: "<value>",
        scheduledStartTime: new Date("2024-09-11T19:05:27.795Z"),
      },
    ],
    threads: [],
    applicationCommands: [],
    autoModerationRules: [
      {
        id: "<value>",
        guildId: "<value>",
        creatorId: "<value>",
        name: "<value>",
        actions: [],
        enabled: false,
        exemptRoles: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        exemptChannels: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        triggerMetadata: {
          allowList: [
            "<value 1>",
            "<value 2>",
          ],
          presets: [
            127310,
            528147,
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.GuildAuditLogResponse](../../models/components/guildauditlogresponse.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |