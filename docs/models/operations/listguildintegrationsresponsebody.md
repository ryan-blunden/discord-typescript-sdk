# ListGuildIntegrationsResponseBody


## Supported Types

### `components.DiscordIntegrationResponse`

```typescript
const value: components.DiscordIntegrationResponse = {
  type: "guild_subscription",
  name: "<value>",
  account: {
    id: "<id>",
    name: null,
  },
  enabled: true,
  id: "<value>",
  application: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
    description: "beside off upon knowledgeable hence king",
    type: 4,
  },
  scopes: [],
};
```

### `components.ExternalConnectionIntegrationResponse`

```typescript
const value: components.ExternalConnectionIntegrationResponse = {
  type: "guild_subscription",
  name: null,
  account: {
    id: "<id>",
    name: null,
  },
  enabled: false,
  id: "<id>",
  user: {
    id: "<value>",
    username: "Dora.Toy69",
    avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
    discriminator: "<value>",
    publicFlags: 159404,
    flags: 192637,
    globalName: null,
    primaryGuild: {
      identityGuildId: "<value>",
      identityEnabled: false,
      tag: "<value>",
      badge: "<value>",
    },
  },
};
```

### `components.GuildSubscriptionIntegrationResponse`

```typescript
const value: components.GuildSubscriptionIntegrationResponse = {
  type: "youtube",
  name: "<value>",
  account: {
    id: "<id>",
    name: null,
  },
  enabled: false,
  id: "<value>",
};
```

