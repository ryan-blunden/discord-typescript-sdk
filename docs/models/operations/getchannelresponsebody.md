# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 571591,
  guildId: "<value>",
  name: "<value>",
  position: 520173,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 81790,
  recipients: [
    {
      id: "<value>",
      username: "Saige.Hodkiewicz",
      discriminator: "<value>",
      publicFlags: 563957,
      flags: 362377,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 279684,
  recipients: [
    {
      id: "<value>",
      username: "Jaunita84",
      discriminator: "<value>",
      publicFlags: 829742,
      flags: 525700,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 711557,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 335208,
  memberCount: 459197,
  totalMessageSent: 940490,
};
```

