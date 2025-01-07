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
      metadata: {
        channelId: "<value>",
      },
    },
  ],
  triggerMetadata: {
    allowList: [
      "<value>",
    ],
    presets: [
      626341,
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
        durationSeconds: 533956,
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
        durationSeconds: 218045,
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
        durationSeconds: 79692,
      },
    },
  ],
  triggerMetadata: {
    mentionTotalLimit: 761109,
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

