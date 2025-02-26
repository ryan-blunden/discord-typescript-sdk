# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 562238,
  guildId: "<value>",
  name: "<value>",
  position: 815452,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 666863,
  recipients: [
    {
      id: "<value>",
      username: "Leif.Bergnaum",
      discriminator: "<value>",
      publicFlags: 995715,
      flags: 820659,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 926479,
  recipients: [
    {
      id: "<value>",
      username: "Chesley4",
      discriminator: "<value>",
      publicFlags: 212369,
      flags: 591191,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 275974,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 22402,
  memberCount: 685537,
  totalMessageSent: 448659,
};
```

