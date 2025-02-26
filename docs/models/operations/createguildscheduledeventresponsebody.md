# CreateGuildScheduledEventResponseBody

200 response for create_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2024-02-15T18:34:08.550Z"),
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
  scheduledStartTime: new Date("2024-04-14T20:09:21.741Z"),
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2025-01-18T15:07:16.693Z"),
};
```

