# AddGroupDmUserResponseBody

201 response for add_group_dm_user


## Supported Types

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  type: 13,
  flags: 251055,
  recipients: [
    {
      id: "<value>",
      username: "Bennie93",
      discriminator: "<value>",
      publicFlags: 175853,
      flags: 411991,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  type: 0,
  flags: 29105,
  recipients: [
    {
      id: "<value>",
      username: "Bennie93",
      discriminator: "<value>",
      publicFlags: 175853,
      flags: 411991,
    },
  ],
};
```

