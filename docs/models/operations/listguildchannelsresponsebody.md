# ListGuildChannelsResponseBody


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 419066,
  guildId: "<value>",
  name: "<value>",
  position: 787299,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 271266,
  recipients: [
    {
      id: "<value>",
      username: "Raphael_Conroy47",
      discriminator: "<value>",
      publicFlags: 610443,
      flags: 456007,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 88587,
  recipients: [
    {
      id: "<value>",
      username: "Fanny_Murazik49",
      discriminator: "<value>",
      publicFlags: 113553,
      flags: 416803,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 185321,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 920954,
  memberCount: 212078,
  totalMessageSent: 376370,
};
```

