# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 849560,
  guildId: "<value>",
  name: "<value>",
  position: 864386,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 13,
  flags: 251055,
  recipients: [
    {
      id: "<value>",
      username: "Bennie93",
      discriminator: "<value>",
      publicFlags: 175853,
      flags: 411991,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 29105,
  recipients: [
    {
      id: "<value>",
      username: "Bennie93",
      discriminator: "<value>",
      publicFlags: 175853,
      flags: 411991,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 14,
  flags: 767761,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 973464,
  memberCount: 499430,
  totalMessageSent: 246379,
};
```

