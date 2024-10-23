# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 5,
  flags: 125404,
  guildId: "<value>",
  name: "<value>",
  position: 170992,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 918997,
  recipients: [
    {
      id: "<value>",
      username: "Jada53",
      discriminator: "<value>",
      publicFlags: 417304,
      flags: 412604,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 3,
  flags: 453310,
  recipients: [
    {
      id: "<value>",
      username: "Rudy5",
      discriminator: "<value>",
      publicFlags: 706208,
      flags: 580125,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 10,
  flags: 918082,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 469557,
  memberCount: 911193,
  totalMessageSent: 418407,
};
```

