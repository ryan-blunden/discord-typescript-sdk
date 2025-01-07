# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 354947,
  guildId: "<value>",
  name: "<value>",
  position: 172985,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 472094,
  recipients: [
    {
      id: "<value>",
      username: "Macy90",
      discriminator: "<value>",
      publicFlags: 221934,
      flags: 603488,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 660240,
  recipients: [
    {
      id: "<value>",
      username: "Juanita.Bailey",
      discriminator: "<value>",
      publicFlags: 76514,
      flags: 308179,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 1772,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 579414,
  memberCount: 999479,
  totalMessageSent: 590100,
};
```

