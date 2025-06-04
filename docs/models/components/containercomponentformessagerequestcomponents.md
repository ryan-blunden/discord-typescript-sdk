# ContainerComponentForMessageRequestComponents


## Supported Types

### `components.ActionRowComponentForMessageRequest`

```typescript
const value: components.ActionRowComponentForMessageRequest = {
  components: [
    {
      customId: "<id>",
      options: [],
    },
  ],
};
```

### `components.FileComponentForMessageRequest`

```typescript
const value: components.FileComponentForMessageRequest = {
  file: {
    url: "https://enchanted-pneumonia.info",
  },
};
```

### `components.MediaGalleryComponentForMessageRequest`

```typescript
const value: components.MediaGalleryComponentForMessageRequest = {
  items: [],
};
```

### `components.SectionComponentForMessageRequest`

```typescript
const value: components.SectionComponentForMessageRequest = {
  components: [
    {
      content: "<value>",
    },
  ],
  accessory: {},
};
```

### `components.SeparatorComponentForMessageRequest`

```typescript
const value: components.SeparatorComponentForMessageRequest = {};
```

### `components.TextDisplayComponentForMessageRequest`

```typescript
const value: components.TextDisplayComponentForMessageRequest = {
  content: "<value>",
};
```

