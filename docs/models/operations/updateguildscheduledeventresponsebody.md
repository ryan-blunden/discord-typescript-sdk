# UpdateGuildScheduledEventResponseBody

200 response for update_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2023-09-15T04:12:47.070Z"),
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
  scheduledStartTime: new Date("2025-09-11T07:14:07.992Z"),
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2023-02-26T05:37:22.947Z"),
};
```

