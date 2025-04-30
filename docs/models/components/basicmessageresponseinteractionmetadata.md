# BasicMessageResponseInteractionMetadata


## Supported Types

### `components.ApplicationCommandInteractionMetadataResponse`

```typescript
const value: components.ApplicationCommandInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
  },
};
```

### `components.MessageComponentInteractionMetadataResponse`

```typescript
const value: components.MessageComponentInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
  },
  interactedMessageId: "<value>",
};
```

### `components.ModalSubmitInteractionMetadataResponse`

```typescript
const value: components.ModalSubmitInteractionMetadataResponse = {
  id: "<value>",
  authorizingIntegrationOwners: {
    "key": "<value>",
  },
  triggeringInteractionMetadata: {
    id: "<value>",
    authorizingIntegrationOwners: {
      "key": "<value>",
    },
    interactedMessageId: "<value>",
  },
};
```

