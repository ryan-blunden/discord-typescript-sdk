# GuildIncidentActionsRequest

## Example Usage

```typescript
import { GuildIncidentActionsRequest } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildIncidentActionsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `invitesDisabledUntil`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When invites will be enabled again                                                            |
| `dmsDisabledUntil`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When direct messages will be enabled again                                                    |