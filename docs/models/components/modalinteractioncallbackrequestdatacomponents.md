# ModalInteractionCallbackRequestDataComponents


## Supported Types

### `components.ActionRowComponentForModalRequest`

```typescript
const value: components.ActionRowComponentForModalRequest = {
  type: 14,
  components: [
    {
      type: 7,
      customId: "<id>",
      style: 2,
    },
  ],
};
```

### `components.LabelComponentForModalRequest`

```typescript
const value: components.LabelComponentForModalRequest = {
  type: 14,
  label: "<value>",
  component: {
    type: 3,
    customId: "<id>",
  },
};
```

### `components.TextDisplayComponentForModalRequest`

```typescript
const value: components.TextDisplayComponentForModalRequest = {
  type: 23,
  content: "<value>",
};
```

