# BasicMessageResponseInteractionMetadata


## Supported Types

### `components.ApplicationCommandInteractionMetadataResponse`

```typescript
const value: components.ApplicationCommandInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `components.MessageComponentInteractionMetadataResponse`

```typescript
const value: components.MessageComponentInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {},
  interactedMessageId: "<value>",
};
```

### `components.ModalSubmitInteractionMetadataResponse`

```typescript
const value: components.ModalSubmitInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
    "key1": "<value>",
  },
  triggeringInteractionMetadata: {
    id: "<value>",
    authorizingIntegrationOwners: {
      "key": "<value>",
    },
  },
};
```

