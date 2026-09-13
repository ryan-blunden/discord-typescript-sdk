# MessageEditRequestPartialComponents


## Supported Types

### `components.ActionRowComponentForMessageRequest`

```typescript
const value: components.ActionRowComponentForMessageRequest = {
  type: 22,
  components: [
    {
      type: 9,
      customId: "<id>",
    },
  ],
};
```

### `components.ContainerComponentForMessageRequest`

```typescript
const value: components.ContainerComponentForMessageRequest = {
  type: 9,
  components: [
    {
      type: 22,
      components: [
        {
          type: 2,
          customId: "<id>",
        },
      ],
    },
  ],
};
```

### `components.FileComponentForMessageRequest`

```typescript
const value: components.FileComponentForMessageRequest = {
  type: 17,
  file: {
    url: "https://rigid-import.com/",
  },
};
```

### `components.MediaGalleryComponentForMessageRequest`

```typescript
const value: components.MediaGalleryComponentForMessageRequest = {
  type: 8,
  items: [
    {
      media: {
        url: "https://optimal-tuba.info",
      },
    },
  ],
};
```

### `components.SectionComponentForMessageRequest`

```typescript
const value: components.SectionComponentForMessageRequest = {
  type: 17,
  components: [],
  accessory: {
    type: 17,
    media: {
      url: "https://optimal-tuba.info",
    },
  },
};
```

### `components.SeparatorComponentForMessageRequest`

```typescript
const value: components.SeparatorComponentForMessageRequest = {
  type: 3,
};
```

### `components.TextDisplayComponentForMessageRequest`

```typescript
const value: components.TextDisplayComponentForMessageRequest = {
  type: 10,
  content: "<value>",
};
```

