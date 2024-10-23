# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 2,
  flags: 513733,
  guildId: "<value>",
  name: "<value>",
  position: 725902,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 903664,
  recipients: [
    {
      id: "<value>",
      username: "Dock.Lang98",
      discriminator: "<value>",
      publicFlags: 190895,
      flags: 753559,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 3,
  flags: 386377,
  recipients: [
    {
      id: "<value>",
      username: "Kelsi_Orn68",
      discriminator: "<value>",
      publicFlags: 97799,
      flags: 607549,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 11,
  flags: 995715,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 820659,
  memberCount: 926479,
  totalMessageSent: 180463,
};
```

