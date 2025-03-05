# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 849010,
  guildId: "<value>",
  name: "<value>",
  position: 509739,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 106118,
  recipients: [
    {
      id: "<value>",
      username: "Elvie60",
      discriminator: "<value>",
      publicFlags: 276177,
      flags: 756641,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 103328,
  recipients: [
    {
      id: "<value>",
      username: "Dawson7",
      discriminator: "<value>",
      publicFlags: 198665,
      flags: 567320,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 271465,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 597500,
  memberCount: 654297,
  totalMessageSent: 725592,
};
```

