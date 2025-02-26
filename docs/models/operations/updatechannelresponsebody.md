# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 317022,
  guildId: "<value>",
  name: "<value>",
  position: 222520,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 439123,
  recipients: [
    {
      id: "<value>",
      username: "Yasmeen27",
      discriminator: "<value>",
      publicFlags: 263333,
      flags: 774307,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 643984,
  recipients: [
    {
      id: "<value>",
      username: "Kiara_Flatley87",
      discriminator: "<value>",
      publicFlags: 732670,
      flags: 879923,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 616888,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 258430,
  memberCount: 351475,
  totalMessageSent: 748805,
};
```

