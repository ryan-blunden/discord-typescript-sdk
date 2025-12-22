# CreateAutoModerationRuleResponseBody

200 response for create_auto_moderation_rule


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
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  triggerMetadata: {
    allowList: [
      "<value 1>",
      "<value 2>",
    ],
    presets: [
      127310,
      528147,
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
  actions: [],
  enabled: false,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [],
  triggerMetadata: {
    keywordFilter: [],
    regexPatterns: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    allowList: [],
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
      metadata: {},
    },
  ],
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
  ],
  exemptChannels: [
    "<value 1>",
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
  actions: [],
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  triggerMetadata: {
    mentionTotalLimit: 795455,
    mentionRaidProtectionEnabled: false,
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
  enabled: true,
  exemptRoles: [],
  exemptChannels: [],
  triggerMetadata: {},
};
```

