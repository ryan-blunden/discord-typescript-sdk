# ListGuildChannelsResponseBody


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 111600,
  guildId: "<value>",
  name: "<value>",
  position: 31345,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 90445,
  recipients: [
    {
      id: "<value>",
      username: "Dakota39",
      discriminator: "<value>",
      publicFlags: 72321,
      flags: 564816,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 115028,
  recipients: [
    {
      id: "<value>",
      username: "Zander.Volkman99",
      discriminator: "<value>",
      publicFlags: 58922,
      flags: 823237,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 776593,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 247937,
  memberCount: 246846,
  totalMessageSent: 472655,
};
```

