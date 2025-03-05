# GetAutoModerationRuleResponseBody

200 response for get_auto_moderation_rule


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
        durationSeconds: 582521,
      },
    },
  ],
  triggerMetadata: {
    allowList: [
      "<value>",
    ],
    presets: [
      917168,
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
    mentionTotalLimit: 604308,
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

