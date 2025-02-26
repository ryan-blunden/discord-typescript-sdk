# ResponseBody


## Supported Types

### `components.DefaultKeywordRuleResponse`

```typescript
const value: components.DefaultKeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {},
    },
  ],
  triggerMetadata: {
    allowList: [
      "<value>",
    ],
    presets: [
      209562,
    ],
  },
};
```

### `components.KeywordRuleResponse`

```typescript
const value: components.KeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {},
    },
  ],
  triggerMetadata: {
    keywordFilter: [
      "<value>",
    ],
    regexPatterns: [
      "<value>",
    ],
    allowList: [
      "<value>",
    ],
  },
};
```

### `components.MLSpamRuleResponse`

```typescript
const value: components.MLSpamRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {
        durationSeconds: 302413,
      },
    },
  ],
  triggerMetadata: {},
};
```

### `components.MentionSpamRuleResponse`

```typescript
const value: components.MentionSpamRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {
        durationSeconds: 420757,
      },
    },
  ],
  triggerMetadata: {
    mentionTotalLimit: 862130,
  },
};
```

### `components.SpamLinkRuleResponse`

```typescript
const value: components.SpamLinkRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {},
    },
  ],
  triggerMetadata: {},
};
```

