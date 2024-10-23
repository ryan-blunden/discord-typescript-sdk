# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 13,
  flags: 27877,
  guildId: "<value>",
  name: "<value>",
  position: 735143,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 1,
  flags: 42221,
  recipients: [
    {
      id: "<value>",
      username: "Margot2",
      discriminator: "<value>",
      publicFlags: 448659,
      flags: 724231,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 3,
  flags: 56284,
  recipients: [
    {
      id: "<value>",
      username: "Justina_Considine22",
      discriminator: "<value>",
      publicFlags: 141808,
      flags: 141432,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 12,
  flags: 589943,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 792349,
  memberCount: 257219,
  totalMessageSent: 626341,
};
```

