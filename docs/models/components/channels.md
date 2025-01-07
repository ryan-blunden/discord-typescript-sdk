# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 25744,
  guildId: "<value>",
  name: "<value>",
  position: 387768,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 444167,
  recipients: [
    {
      id: "<value>",
      username: "Jodie27",
      discriminator: "<value>",
      publicFlags: 12575,
      flags: 142799,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 925301,
  recipients: [
    {
      id: "<value>",
      username: "Janick.Monahan",
      discriminator: "<value>",
      publicFlags: 614426,
      flags: 627709,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 886903,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 492506,
  memberCount: 104737,
  totalMessageSent: 113553,
};
```

