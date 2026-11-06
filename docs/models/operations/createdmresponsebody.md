# CreateDmResponseBody

200 response for create_dm


## Supported Types

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

