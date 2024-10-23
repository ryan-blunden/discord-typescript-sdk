# ListGuildChannelsResponseBody


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 15,
  flags: 906445,
  guildId: "<value>",
  name: "<value>",
  position: 538300,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 476192,
  recipients: [
    {
      id: "<value>",
      username: "Kacey78",
      discriminator: "<value>",
      publicFlags: 840873,
      flags: 451468,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 3,
  flags: 124272,
  recipients: [
    {
      id: "<value>",
      username: "Juana.Keeling84",
      discriminator: "<value>",
      publicFlags: 474637,
      flags: 385138,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 12,
  flags: 561625,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 474955,
  memberCount: 596194,
  totalMessageSent: 232141,
};
```

