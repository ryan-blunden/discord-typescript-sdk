# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 724231,
  guildId: "<value>",
  name: "<value>",
  position: 56284,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 530203,
  recipients: [
    {
      id: "<value>",
      username: "Amos.Schaden9",
      discriminator: "<value>",
      publicFlags: 141432,
      flags: 843824,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 589943,
  recipients: [
    {
      id: "<value>",
      username: "Pearl53",
      discriminator: "<value>",
      publicFlags: 218045,
      flags: 966927,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 79692,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 761109,
  memberCount: 201719,
  totalMessageSent: 116887,
};
```

