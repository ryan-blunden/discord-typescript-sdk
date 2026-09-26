# ListGuildAuditLogEntriesResponse

## Example Usage

```typescript
import { ListGuildAuditLogEntriesResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: ListGuildAuditLogEntriesResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    auditLogEntries: [],
    users: [
      {
        id: "<value>",
        username: "Alison_Grady",
        avatar: "https://picsum.photos/seed/1X0JOfPHss/886/3879",
        discriminator: "<value>",
        publicFlags: 395066,
        flags: 126615,
        globalName: "<value>",
        primaryGuild: {
          identityGuildId: "<value>",
          identityEnabled: false,
          tag: "<value>",
          badge: "<value>",
        },
      },
    ],
    integrations: [],
    webhooks: [],
    guildScheduledEvents: [
      {
        id: "<value>",
        guildId: "<value>",
        name: "<value>",
        description: "soliloquy glimmer energetically",
        channelId: "<value>",
        creatorId: "<value>",
        image: "https://loremflickr.com/207/719?lock=8683872317537330",
        scheduledStartTime: new Date("2024-03-02T15:27:53.930Z"),
        scheduledEndTime: new Date("2025-03-11T18:41:53.326Z"),
        status: 4,
        entityType: 1,
        entityId: "<value>",
        recurrenceRule: {
          start: new Date("2024-12-18T10:55:52.189Z"),
          frequency: 3,
          interval: 174956,
          byWeekday: [
            1,
          ],
          byNWeekday: [],
          byMonth: [],
          byMonthDay: [
            733968,
            671056,
          ],
        },
        privacyLevel: 2,
        guildScheduledEventExceptions: [],
        entityMetadata: {},
      },
    ],
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
          archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
          autoArchiveDuration: 4320,
          locked: true,
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
        eventType: 1,
        actions: [],
        triggerType: 1,
        enabled: true,
        exemptRoles: [],
        exemptChannels: [],
        triggerMetadata: {
          keywordFilter: [],
          regexPatterns: [
            "<value 1>",
            "<value 2>",
          ],
          allowList: [
            "<value 1>",
            "<value 2>",
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