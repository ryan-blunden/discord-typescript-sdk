# Channels


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 4695,
  guildId: "<value>",
  name: "<value>",
  position: 677817,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 270008,
  recipients: [
    {
      id: "<value>",
      username: "Mustafa_Franey-Mayer57",
      discriminator: "<value>",
      publicFlags: 952749,
      flags: 447125,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 846409,
  recipients: [
    {
      id: "<value>",
      username: "Maximo.Schulist",
      discriminator: "<value>",
      publicFlags: 881736,
      flags: 692532,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 725255,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 501324,
  memberCount: 956084,
  totalMessageSent: 643990,
};
```

