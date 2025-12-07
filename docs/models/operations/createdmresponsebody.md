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
      discriminator: "<value>",
      publicFlags: 948718,
      flags: 542086,
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
  ownerId: "<value>",
};
```

