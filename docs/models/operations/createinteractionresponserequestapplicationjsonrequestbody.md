# CreateInteractionResponseRequestApplicationJSONRequestBody


## Supported Types

### `components.ApplicationCommandAutocompleteCallbackRequest`

```typescript
const value: components.ApplicationCommandAutocompleteCallbackRequest = {
  type: 7,
  data: {},
};
```

### `components.CreateMessageInteractionCallbackRequest`

```typescript
const value: components.CreateMessageInteractionCallbackRequest = {
  type: 6,
};
```

### `components.LaunchActivityInteractionCallbackRequest`

```typescript
const value: components.LaunchActivityInteractionCallbackRequest = {
  type: 4,
};
```

### `components.ModalInteractionCallbackRequest`

```typescript
const value: components.ModalInteractionCallbackRequest = {
  type: 4,
  data: {
    customId: "<id>",
    title: "<value>",
    components: [],
  },
};
```

### `components.PongInteractionCallbackRequest`

```typescript
const value: components.PongInteractionCallbackRequest = {
  type: 9,
};
```

### `components.SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest`

```typescript
const value:
  components.SocialLayerSKUPurchaseEligibilityInteractionCallbackRequest = {
    type: 8,
    data: {
      eligible: false,
    },
  };
```

### `components.UpdateMessageInteractionCallbackRequest`

```typescript
const value: components.UpdateMessageInteractionCallbackRequest = {
  type: 9,
};
```

