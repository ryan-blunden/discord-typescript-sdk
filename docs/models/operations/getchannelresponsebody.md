# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 94668,
  guildId: "<value>",
  name: "<value>",
  position: 777139,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 901691,
  recipients: [
    {
      id: "<value>",
      username: "Rex25",
      discriminator: "<value>",
      publicFlags: 41387,
      flags: 398054,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 860470,
  recipients: [
    {
      id: "<value>",
      username: "Isabell31",
      discriminator: "<value>",
      publicFlags: 940797,
      flags: 167765,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 93386,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 299357,
  memberCount: 469043,
  totalMessageSent: 157014,
};
```

