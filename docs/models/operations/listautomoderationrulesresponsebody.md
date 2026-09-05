# ListAutoModerationRulesResponseBody


## Supported Types

### `components.DefaultKeywordRuleResponse`

```typescript
const value: components.DefaultKeywordRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 2,
  actions: [],
  triggerType: 4,
  enabled: false,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
  ],
  triggerMetadata: {
    allowList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    presets: [
      1,
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
  eventType: 1,
  actions: [
    {
      type: 1,
      metadata: {
        durationSeconds: 122685,
      },
    },
  ],
  triggerType: 6,
  enabled: true,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
  ],
  triggerMetadata: {
    keywordFilter: [],
    regexPatterns: [
      "<value 1>",
      "<value 2>",
    ],
    allowList: [
      "<value 1>",
      "<value 2>",
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
  eventType: 2,
  actions: [],
  triggerType: 4,
  enabled: false,
  exemptRoles: [
    "<value 1>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  eventType: 1,
  actions: [],
  triggerType: 4,
  enabled: false,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  exemptChannels: [
    "<value 1>",
    "<value 2>",
  ],
  triggerMetadata: {
    mentionTotalLimit: 205400,
    mentionRaidProtectionEnabled: true,
  },
};
```

### `components.UserProfileRuleResponse`

```typescript
const value: components.UserProfileRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  eventType: 2,
  actions: [],
  triggerType: 3,
  enabled: false,
  exemptRoles: [
    "<value 1>",
    "<value 2>",
  ],
  exemptChannels: [],
  triggerMetadata: {
    keywordFilter: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    regexPatterns: [
      "<value 1>",
      "<value 2>",
    ],
    allowList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

