# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 10,
  flags: 206744,
  guildId: "<value>",
  name: "<value>",
  position: 501107,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 10,
  flags: 533007,
  recipients: [
    {
      id: "<value>",
      username: "Delphia.Ferry",
      discriminator: "<value>",
      publicFlags: 948718,
      flags: 542086,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 385842,
  recipients: [],
  ownerId: "<value>",
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 5,
  flags: 385033,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  threadMetadata: {
    archived: true,
    locked: false,
  },
  messageCount: 967008,
  memberCount: 730303,
  totalMessageSent: 1151,
};
```

