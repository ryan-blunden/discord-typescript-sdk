# AutoModerationRules


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
      631352,
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
      metadata: {
        durationSeconds: 304419,
      },
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
        channelId: "<value>",
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
      metadata: {},
    },
  ],
  triggerMetadata: {
    mentionTotalLimit: 457176,
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
      metadata: {
        channelId: "<value>",
      },
    },
  ],
  triggerMetadata: {},
};
```

