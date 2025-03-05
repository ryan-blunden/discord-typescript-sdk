# GetGuildScheduledEventResponseBody

200 response for get_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2025-01-17T02:51:27.106Z"),
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
  scheduledStartTime: new Date("2023-03-05T14:02:18.907Z"),
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2025-03-17T01:50:29.399Z"),
};
```

