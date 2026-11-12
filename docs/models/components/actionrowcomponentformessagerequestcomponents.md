# ActionRowComponentForMessageRequestComponents


## Supported Types

### `components.ButtonComponentForMessageRequest`

```typescript
const value: components.ButtonComponentForMessageRequest = {
  type: 5,
  style: 4,
};
```

### `components.ChannelSelectComponentForMessageRequest`

```typescript
const value: components.ChannelSelectComponentForMessageRequest = {
  type: 13,
  customId: "<id>",
};
```

### `components.MentionableSelectComponentForMessageRequest`

```typescript
const value: components.MentionableSelectComponentForMessageRequest = {
  type: 13,
  customId: "<id>",
};
```

### `components.RoleSelectComponentForMessageRequest`

```typescript
const value: components.RoleSelectComponentForMessageRequest = {
  type: 18,
  customId: "<id>",
};
```

### `components.StringSelectComponentForMessageRequest`

```typescript
const value: components.StringSelectComponentForMessageRequest = {
  type: 12,
  customId: "<id>",
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

### `components.UserSelectComponentForMessageRequest`

```typescript
const value: components.UserSelectComponentForMessageRequest = {
  type: 9,
  customId: "<id>",
};
```

