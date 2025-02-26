# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 606393,
  guildId: "<value>",
  name: "<value>",
  position: 19193,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 301575,
  recipients: [
    {
      id: "<value>",
      username: "Maggie.Mosciski13",
      discriminator: "<value>",
      publicFlags: 569965,
      flags: 590873,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 574325,
  recipients: [
    {
      id: "<value>",
      username: "Madaline_Kemmer",
      discriminator: "<value>",
      publicFlags: 891924,
      flags: 806194,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 703889,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 100226,
  memberCount: 919483,
  totalMessageSent: 714242,
};
```

