# Components


## Supported Types

### `components.ActionRowComponentForMessageRequest`

```typescript
const value: components.ActionRowComponentForMessageRequest = {
  components: [
    {
      customId: "<id>",
    },
  ],
};
```

### `components.ContainerComponentForMessageRequest`

```typescript
const value: components.ContainerComponentForMessageRequest = {
  components: [
    {
      items: [
        {
          media: {
            url: "https://bogus-tenement.name",
          },
        },
      ],
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
  items: [
    {
      media: {
        url: "https://superficial-morning.name/",
      },
    },
  ],
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
  accessory: {
    media: {
      url: "https://vengeful-quinoa.info/",
    },
  },
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

