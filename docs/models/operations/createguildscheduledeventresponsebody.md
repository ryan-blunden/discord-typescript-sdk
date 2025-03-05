# CreateGuildScheduledEventResponseBody

200 response for create_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2023-03-18T08:05:34.907Z"),
  entityMetadata: {
    location: "<value>",
  },
};
```

### `components.StageScheduledEventResponse`

```typescript
const value: components.StageScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2025-05-30T23:32:14.193Z"),
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2023-07-19T02:44:00.494Z"),
};
```

