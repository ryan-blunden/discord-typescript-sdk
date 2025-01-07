# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 327726,
  guildId: "<value>",
  name: "<value>",
  position: 237032,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 508157,
  recipients: [
    {
      id: "<value>",
      username: "Stefanie62",
      discriminator: "<value>",
      publicFlags: 449044,
      flags: 217682,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 376607,
  recipients: [
    {
      id: "<value>",
      username: "Camilla26",
      discriminator: "<value>",
      publicFlags: 688951,
      flags: 686314,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 691711,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 1684,
  memberCount: 813007,
  totalMessageSent: 917609,
};
```

