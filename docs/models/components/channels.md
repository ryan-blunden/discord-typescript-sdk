# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 576157,
  guildId: "<value>",
  name: "<value>",
  position: 592042,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 572252,
  recipients: [
    {
      id: "<value>",
      username: "Damien29",
      discriminator: "<value>",
      publicFlags: 396506,
      flags: 881104,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 581273,
  recipients: [
    {
      id: "<value>",
      username: "Shannon_Reinger",
      discriminator: "<value>",
      publicFlags: 423855,
      flags: 606393,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 19193,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 301575,
  memberCount: 660174,
  totalMessageSent: 290077,
};
```

