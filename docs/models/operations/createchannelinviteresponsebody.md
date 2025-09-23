# CreateChannelInviteResponseBody

200 response for create_channel_invite


## Supported Types

### `components.FriendInviteResponse`

```typescript
const value: components.FriendInviteResponse = {
  code: "<value>",
};
```

### `components.GroupDMInviteResponse`

```typescript
const value: components.GroupDMInviteResponse = {
  code: "<value>",
  channel: {
    id: "<value>",
    type: 2,
  },
};
```

### `components.GuildInviteResponse`

```typescript
const value: components.GuildInviteResponse = {
  code: "<value>",
  guild: {
    id: "<value>",
    name: "<value>",
    features: [],
    premiumSubscriptionCount: 820218,
  },
  guildId: "<value>",
  channel: {
    id: "<value>",
    type: 2,
  },
};
```

