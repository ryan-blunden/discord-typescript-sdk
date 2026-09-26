# GuildIncidentsDataResponse

## Example Usage

```typescript
import { GuildIncidentsDataResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: GuildIncidentsDataResponse = {
  invitesDisabledUntil: new Date("2025-01-28T18:48:08.640Z"),
  dmsDisabledUntil: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `invitesDisabledUntil`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When invites get enabled again                                                                |
| `dmsDisabledUntil`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When direct messages get enabled again                                                        |