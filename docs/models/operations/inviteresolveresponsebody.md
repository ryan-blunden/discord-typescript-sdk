# InviteResolveResponseBody

200 response for invite_resolve


## Supported Types

### `components.FriendInviteResponse`

```typescript
const value: components.FriendInviteResponse = {
  type: 1,
  code: "<value>",
  expiresAt: new Date("2024-10-13T03:27:08.577Z"),
  channel: {
    id: "<value>",
    type: 4,
    name: "<value>",
  },
};
```

### `components.GroupDMInviteResponse`

```typescript
const value: components.GroupDMInviteResponse = {
  type: 0,
  code: "<value>",
  expiresAt: new Date("2026-10-24T02:28:09.847Z"),
  channel: {
    id: "<value>",
    type: 4,
    name: "<value>",
  },
};
```

### `components.GuildInviteResponse`

```typescript
const value: components.GuildInviteResponse = {
  type: 0,
  code: "<value>",
  expiresAt: new Date("2024-03-18T21:13:39.995Z"),
  guild: {
    id: "<value>",
    name: "<value>",
    splash: "<value>",
    banner: null,
    description:
      "spattering agitated over victoriously stack ew in absent which brr",
    icon: "<value>",
    features: [
      "DEVELOPER_SUPPORT_SERVER",
    ],
    verificationLevel: 4,
    vanityUrlCode: null,
    nsfwLevel: 0,
    nsfw: null,
    premiumSubscriptionCount: 325878,
  },
  guildId: "<value>",
  channel: {
    id: "<value>",
    type: 4,
    name: "<value>",
  },
};
```

