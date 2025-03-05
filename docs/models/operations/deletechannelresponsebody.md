# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 241568,
  guildId: "<value>",
  name: "<value>",
  position: 933299,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 714880,
  recipients: [
    {
      id: "<value>",
      username: "Laverne69",
      discriminator: "<value>",
      publicFlags: 852973,
      flags: 585550,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 557250,
  recipients: [
    {
      id: "<value>",
      username: "Graham.Stehr37",
      discriminator: "<value>",
      publicFlags: 792077,
      flags: 673057,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 439202,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 504685,
  memberCount: 896053,
  totalMessageSent: 877674,
};
```

