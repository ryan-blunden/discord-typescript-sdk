# ListGuildChannelsResponseBody


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 548097,
  guildId: "<value>",
  name: "<value>",
  position: 206744,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 591851,
  recipients: [
    {
      id: "<value>",
      username: "Kaci.Franey-Stroman",
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
  flags: 29039,
  recipients: [
    {
      id: "<value>",
      username: "Gerry_Barrows89",
      discriminator: "<value>",
      publicFlags: 605590,
      flags: 133736,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 416741,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 385033,
  memberCount: 44443,
  totalMessageSent: 795253,
};
```

