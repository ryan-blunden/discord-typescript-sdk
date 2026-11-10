# ListGuildChannelsResponseBody


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  type: 10,
  flags: 206744,
  guildId: "<value>",
  name: "<value>",
  position: 501107,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 10,
  flags: 533007,
  recipients: [
    {
      id: "<value>",
      username: "Delphia.Ferry",
      avatar: "https://picsum.photos/seed/YEPx72ML/2168/1884",
      discriminator: "<value>",
      publicFlags: 936875,
      flags: 646435,
      globalName: "<value>",
      primaryGuild: {
        identityGuildId: "<value>",
        identityEnabled: false,
        tag: "<value>",
        badge: "<value>",
      },
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 385842,
  recipients: [],
  name: null,
  icon: "<value>",
  ownerId: "<value>",
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  type: 5,
  flags: 385033,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  threadMetadata: {
    archived: true,
    archiveTimestamp: new Date("2026-11-25T20:10:25.377Z"),
    autoArchiveDuration: 4320,
    locked: true,
  },
  messageCount: 728828,
  memberCount: 947468,
  totalMessageSent: 112473,
};
```

