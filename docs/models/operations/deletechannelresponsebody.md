# DeleteChannelResponseBody

200 response for delete_channel


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
      username: "Verona.Stroman",
      discriminator: "<value>",
      publicFlags: 599322,
      flags: 948718,
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
  recipients: [
    {
      id: "<value>",
      username: "Anita_Smith",
      discriminator: "<value>",
      publicFlags: 133736,
      flags: 827777,
    },
  ],
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
  messageCount: 44443,
  memberCount: 795253,
  totalMessageSent: 967008,
};
```

