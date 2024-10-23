# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 5,
  flags: 870734,
  guildId: "<value>",
  name: "<value>",
  position: 218045,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 966927,
  recipients: [
    {
      id: "<value>",
      username: "Arlene.Douglas55",
      discriminator: "<value>",
      publicFlags: 222520,
      flags: 439123,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 3,
  flags: 988422,
  recipients: [
    {
      id: "<value>",
      username: "Loraine.Yost71",
      discriminator: "<value>",
      publicFlags: 774307,
      flags: 643984,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 11,
  flags: 458895,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 242843,
  memberCount: 609427,
  totalMessageSent: 874348,
};
```

